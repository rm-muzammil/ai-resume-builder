import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/server/auth";
import { z } from "zod";

const updateResumeSchema = z.object({
  title: z.string().optional(),
  templateKey: z.string().optional(),
  personalInfo: z.any().optional(),
  professionalSummary: z.string().optional(),
  education: z.any().optional(),
  experience: z.any().optional(),
  skills: z.any().optional(),
  projects: z.any().optional(),
  certifications: z.any().optional(),
  languages: z.any().optional(),
  socialLinks: z.any().optional(),
  themeSettings: z.any().optional(),
  isPrimary: z.boolean().optional(),
  customSections: z.any().optional(),
});

// GET: Fetch a single resume
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const token = req.cookies.get("token")?.value;
  const user = await getCurrentUser(token);
  const { id } = await params;

  if (!id) return NextResponse.json({ error: "ID is required" }, { status: 400 });
  if (!user) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });

  const resume = await prisma.resume.findUnique({
    where: { id },
  });

  if (!resume || resume.userId !== user.id) {
    return NextResponse.json({ success: false, message: "Resume not found or forbidden" }, { status: 404 });
  }

  return NextResponse.json({ success: true, resume });
}

// PUT: Update resume data
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const token = req.cookies.get("token")?.value;
  const user = await getCurrentUser(token);
  const { id } = await params;

  if (!user) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const result = updateResumeSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ success: false, errors: result.error.flatten().fieldErrors }, { status: 400 });
    }

    // Handle slug generation if title is changed (Optional but recommended)
    const updateData: any = { ...result.data };
    if (result.data.title) {
      updateData.slug = result.data.title.toLowerCase().replace(/ /g, "-") + "-" + id.slice(0, 5);
    }

    const updatedResume = await prisma.resume.update({
      where: { id, userId: user.id },
      data: updateData,
    });

    return NextResponse.json({ success: true, resume: updatedResume });
  } catch (error: any) {
    console.error("PUT Error:", error);
    return NextResponse.json({ success: false, message: "Failed to update resume" }, { status: 500 });
  }
}

// DELETE: Remove resume
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const token = req.cookies.get("token")?.value;
  const user = await getCurrentUser(token);
  const { id } = await params;

  if (!user) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });

  try {
    await prisma.resume.delete({
      where: { id, userId: user.id },
    });

    return NextResponse.json({ success: true, message: "Resume deleted" });
  } catch (error: any) {
    console.error("DELETE Error:", error);
    return NextResponse.json({ success: false, message: "Delete failed" }, { status: 500 });
  }
}