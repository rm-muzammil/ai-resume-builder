import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/server/auth";
import { z } from "zod";
import { slugify } from "@/lib/utils";

const resumeSchema = z.object({
  title: z.string().min(3),
  templateKey: z.string().optional(),
});

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const user = await getCurrentUser(token);

  if (!user) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const resumes = await prisma.resume.findMany({
    where: { userId: user.id },
    orderBy: { updatedAt: "desc" },
  });

  return NextResponse.json({ success: true, resumes });
}

export async function POST(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const user = await getCurrentUser(token);

  if (!user) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const result = resumeSchema.safeParse(body);

  if (!result.success)
    return NextResponse.json(
      { success: false, errors: result.error.flatten().fieldErrors },
      { status: 400 }
    );

  const { title, templateKey } = result.data;

  // Create a new resume with full default structure
  const resume = await prisma.resume.create({
    data: {
      userId: user.id,
      title,
      slug: slugify(title),
      templateKey: templateKey || "modern",
      status: "DRAFT",
      personalInfo: {
        name: "",
        email: "",
        phone: "",
        address: "",
      },
      professionalSummary: "",
      education: [],
      experience: [],
      skills: [],
      projects: [],
      certifications: [],
      languages: [],
      socialLinks: [],
      themeSettings: {
        primaryColor: "#0ea5e9",
        font: "sans-serif",
      },
      isPrimary: false,
    },
  });

  return NextResponse.json({ success: true, resume });
}