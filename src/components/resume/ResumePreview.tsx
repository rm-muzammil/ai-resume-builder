import TemplateModern from "./templates/TemplateModern";
import TemplateATS from "./templates/TemplateATS";
import TemplateSidebar from "./templates/TemplateSidebar";
import type { Resume } from "@/types/resume";

// 1. Define the normalized type to ensure arrays are always present


type Props = {
  resume: Resume | null;
};

export default function ResumePreview({ resume }: Props) {
  if (!resume) {
    return (
      <div className="border border-border rounded-2xl p-6 bg-white text-black">
        Loading preview...
      </div>
    );
  }

  // 2. Normalize Data: Fallback to empty arrays to prevent ".map is not a function"
  const safeResume = {
    ...resume,
    personalInfo: resume.personalInfo || {},
    socialLinks: resume.socialLinks || [],
    skills: resume.skills || [],
    education: resume.education || [],
    experience: resume.experience || [],
    projects: resume.projects || [],
    certifications: resume.certifications || [],
    languages: resume.languages || [],
    customSections: resume.customSections || [],
  };

  const templateKey = resume.templateKey || "modern";

  const renderTemplate = () => {
    switch (templateKey) {
      case "ats":
        return <TemplateATS resume={safeResume} />;
      case "sidebar":
        return <TemplateSidebar resume={safeResume} />;
      case "modern":
      default:
        return <TemplateModern resume={safeResume} />;
    }
  };

  return (
    <div className="w-full  bg-gray-100">
      {/* Print-safe container */}
      <div
        id="resume-preview"
        className="bg-white text-black"
        style={{
          width: "794px", // A4-like width
          minHeight: "1123px", // A4-like height
        
          backgroundColor: "#ffffff",
          color: "#000000",
          
        }}
      >
        {renderTemplate()}
      </div>
    </div>
  );
}