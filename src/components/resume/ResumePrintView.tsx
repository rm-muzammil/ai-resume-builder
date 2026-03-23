// components/resume/ResumePrintView.tsx
import { ResumeWithRelations } from "@/types/resume";
import TemplateATS from "./templates/TemplateATS";
import TemplateModern from "./templates/TemplateModern";
import TemplateSidebar from "./templates/TemplateSidebar";

type Props = {
  resume: ResumeWithRelations;
};

export default function ResumePrintView({ resume }: Props) {
  const template = resume.templateKey || "ats";

  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return <TemplateModern resume={resume} />;
      case "sidebar":
        return <TemplateSidebar resume={resume} />;
      case "ats":
      default:
        return <TemplateATS resume={resume} />;
    }
  };

  return (
    <main
      className="m-0 bg-white text-black"
      style={{
        margin: 0,
        background: "#ffffff",
        color: "#000000",
      }}
    >
      <section
        id="resume-pdf-root"
        data-pdf-ready="true"
        className="mx-auto bg-white text-black"
        style={{
          width: "794px",      // A4 width at ~96 DPI
          minHeight: "1123px", // A4 height at ~96 DPI
          margin: "0 auto",
          // padding: "24px",
          boxSizing: "border-box",
          background: "#ffffff",
          color: "#000000",
          overflow: "hidden",
          position: "relative",
          isolation: "isolate",
        }}
      >
        {renderTemplate()}
      </section>
    </main>
  );
}