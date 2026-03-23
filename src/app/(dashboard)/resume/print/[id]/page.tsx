import { notFound } from "next/navigation";
import PrintAutoTrigger from "@/components/resume/PrintAutoTrigger";
import ResumePrintView from "@/components/resume/ResumePrintView";
import prisma from "@/lib/prisma";
import { Resume } from "@/types/resume";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ResumePrintPage({ params }: PageProps) {
  const { id } = await params;

  // 1. Prisma fetch - ensure it matches the structure of your Resume type
  const resumeData = await prisma.resume.findUnique({
    where: { id },
    // If your Resume type expects these, you must include them in the fetch
    // include: {
    //   experience: true,
    //   education: true,
    // }
  });

  if (!resumeData) {
    notFound();
  }

  // 2. Cast to your Resume interface safely
  const resume = resumeData as unknown as Resume;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <PrintAutoTrigger />

      <div>
        <ResumePrintView resume={resume} />
      </div>
    </main>
  );
}