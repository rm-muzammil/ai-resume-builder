import { NextRequest, NextResponse } from "next/server";
// import { Prisma } from "@/app/generated/prisma/client";
import { Prisma } from "@/generated/client";
import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/server/auth";
import { z } from "zod"

/**
 * Recursive JSON schema compatible with Prisma Json fields
 */
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.null(),
    z.array(jsonSchema),
    z.record(z.string(), jsonSchema),
  ])
) as unknown as z.ZodType<Prisma.InputJsonValue>;

const updateResumeSchema = z.object({
  title: z.string().optional(),
  templateKey: z.string().optional(),
  personalInfo: jsonSchema.optional(),
  professionalSummary: z.string().optional(),
  education: jsonSchema.optional(),
  experience: jsonSchema.optional(),
  skills: jsonSchema.optional(),
  projects: jsonSchema.optional(),
  certifications: jsonSchema.optional(),
  languages: jsonSchema.optional(),
  socialLinks: jsonSchema.optional(),
  themeSettings: jsonSchema.optional(),
  isPrimary: z.boolean().optional(),
  customSections: jsonSchema.optional(),
});

// GET: Fetch a single resume
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const token = req.cookies.get("token")?.value;
  const user = await getCurrentUser(token);
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  if (!user) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  const resume = await prisma.resume.findUnique({
    where: { id },
  });

  if (!resume || resume.userId !== user.id) {
    return NextResponse.json(
      { success: false, message: "Resume not found or forbidden" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, resume });
}

// PUT: Update resume data
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const token = req.cookies.get("token")?.value;
  const user = await getCurrentUser(token);
  const { id } = await params;

  if (!user) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const result = updateResumeSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // Ownership check (safer than update where { id, userId } unless compound unique exists)
    const existingResume = await prisma.resume.findFirst({
      where: { id, userId: user.id },
    });

    if (!existingResume) {
      return NextResponse.json(
        { success: false, message: "Resume not found or forbidden" },
        { status: 404 }
      );
    }

    const updateData: Prisma.ResumeUpdateInput = {
      ...result.data,
      ...(result.data.title
        ? {
            slug:
              result.data.title
                .toLowerCase()
                .trim()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "") +
              "-" +
              id.slice(0, 5),
          }
        : {}),
    };

    const updatedResume = await prisma.resume.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json({ success: true, resume: updatedResume });
  } catch (error: unknown) {
    console.error("PUT Error:", error);

    const message =
      error instanceof Error ? error.message : "Failed to update resume";

    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
  }
}

// DELETE: Remove resume
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const token = req.cookies.get("token")?.value;
  const user = await getCurrentUser(token);
  const { id } = await params;

  if (!user) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const existingResume = await prisma.resume.findFirst({
      where: { id, userId: user.id },
    });

    if (!existingResume) {
      return NextResponse.json(
        { success: false, message: "Resume not found or forbidden" },
        { status: 404 }
      );
    }

    await prisma.resume.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Resume deleted" });
  } catch (error: unknown) {
    console.error("DELETE Error:", error);

    const message = error instanceof Error ? error.message : "Delete failed";

    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
  }
}