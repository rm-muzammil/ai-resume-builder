import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import ResumePrintView from "@/components/resume/ResumePrintView";
import { Resume } from "@/types/resume";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ResumePDFPage({ params }: PageProps) {
  const { id } = await params;

  const resumeData = await prisma.resume.findUnique({
    where: { id },
  });

  if (!resumeData) {
    notFound();
  }

   const resume = resumeData as unknown as Resume;

  return (
    <main className="min-h-screen bg-white">
      <ResumePrintView resume={resume} />
    </main>
  );
}