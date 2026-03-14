import TemplateModern from "./templates/TemplateModern";

type Resume = {
  id?: string;
  title?: string;
  templateKey?: string;
  personalInfo?: {
    fullName?: string;
    headline?: string;
    location?: string;
  };
  contactLinks?: { label: string; url: string }[];
  professionalSummary?: string;
  skills?: string[];
  education?: any[];
  experience?: any[];
  projects?: any[];
  certifications?: any[];
  languages?: any[];
  customSections?: any[];
};

type Props = {
  resume: Resume | null;
};

export default function ResumePreview({ resume }: Props) {
  if (!resume) {
    return (
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-slate-400">
        Loading preview...
      </div>
    );
  }

  const templateKey = resume.templateKey || "modern-pro";

  switch (templateKey) {
    case "modern-pro":
    default:
      return <TemplateModern resume={resume} />;
  }
}