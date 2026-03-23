type ContactLink = {
  label: string;
  url: string;
};

type EducationItem = {
  school?: string;
  degree?: string;
  field?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
};

type ExperienceItem = {
  company?: string;
  role?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
};

type ProjectItem = {
  name?: string;
  techStack?: string;
  link?: string;
  description?: string;
};

type CertificationItem = {
  name?: string;
  issuer?: string;
  year?: string;
};

type LanguageItem = {
  name?: string;
  level?: string;
};

type CustomSectionItem = {
  title?: string;
  items?: string[];
};

type ResumeData = {
  personalInfo?: {
    name?: string;
    headline?: string;
    email?: string;
    phone?: string;
    address?: string;
  };
  contactLinks?: ContactLink[];
  professionalSummary?: string;
  skills?: string[];
  education?: EducationItem[];
  experience?: ExperienceItem[];
  projects?: ProjectItem[];
  certifications?: CertificationItem[];
  languages?: LanguageItem[];
  customSections?: CustomSectionItem[];
};

export default function TemplateATS({ resume }: { resume: ResumeData }) {
  const personal = resume.personalInfo || {};

  return (
    <div className="bg-white text-black border border-gray-300 rounded-md">
      <div className="p-8">
        {/* Header */}
        <header className="text-center pb-4 mb-5 border-b border-black">
          <h1 className="text-2xl font-bold uppercase tracking-wide">
            {personal.name || "Your Name"}
          </h1>
          <p className="text-sm mt-1 text-gray-800">
            {personal.headline || "Professional Title"}
          </p>

          <div className="mt-2 text-xs text-gray-700 flex flex-wrap justify-center gap-x-3 gap-y-1">
            {personal.email && <span>{personal.email}</span>}
            {personal.phone && <span>{personal.phone}</span>}
            {personal.address && <span>{personal.address}</span>}
            {Array.isArray(resume.contactLinks) &&
              resume.contactLinks.map((link, i) => (
                <span key={i}>
                  {link.label}: {link.url}
                </span>
              ))}
          </div>
        </header>

        {resume.professionalSummary && (
          <ATSSection title="Professional Summary">
            <p className="text-sm leading-6 text-gray-800 whitespace-pre-line">
              {resume.professionalSummary}
            </p>
          </ATSSection>
        )}

        {resume.skills && resume.skills.length > 0 && (
          <ATSSection title="Skills">
            <p className="text-sm text-gray-800">{resume.skills.join(" • ")}</p>
          </ATSSection>
        )}

        {resume.experience && resume.experience.length > 0 && (
          <ATSSection title="Experience">
            <div className="space-y-4">
              {resume.experience.map((exp, i) => (
                <div key={i}>
                  <div className="flex justify-between flex-wrap gap-2">
                    <div>
                      <p className="font-semibold text-sm text-black">
                        {exp.role || "Role"}
                      </p>
                      <p className="text-sm text-gray-800">
                        {exp.company || "Company"}
                      </p>
                    </div>
                    <p className="text-xs text-gray-600">
                      {exp.startDate || "Start"}
                      {exp.endDate ? ` — ${exp.endDate}` : ""}
                    </p>
                  </div>
                  {exp.description && (
                    <p className="text-sm mt-1 whitespace-pre-line leading-6 text-gray-800">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </ATSSection>
        )}

        {resume.education && resume.education.length > 0 && (
          <ATSSection title="Education">
            <div className="space-y-4">
              {resume.education.map((edu, i) => (
                <div key={i}>
                  <div className="flex justify-between flex-wrap gap-2">
                    <div>
                      <p className="font-semibold text-sm text-black">
                        {edu.degree || "Degree"} {edu.field ? `in ${edu.field}` : ""}
                      </p>
                      <p className="text-sm text-gray-800">
                        {edu.school || "Institution"}
                      </p>
                    </div>
                    <p className="text-xs text-gray-600">
                      {edu.startDate || "Start"}
                      {edu.endDate ? ` — ${edu.endDate}` : ""}
                    </p>
                  </div>
                  {edu.description && (
                    <p className="text-sm mt-1 whitespace-pre-line leading-6 text-gray-800">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </ATSSection>
        )}

        {resume.projects && resume.projects.length > 0 && (
          <ATSSection title="Projects">
            <div className="space-y-4">
              {resume.projects.map((project, i) => (
                <div key={i}>
                  <p className="font-semibold text-sm text-black">
                    {project.name || "Project"}
                  </p>
                  {project.techStack && (
                    <p className="text-sm text-gray-800">{project.techStack}</p>
                  )}
                  {project.description && (
                    <p className="text-sm mt-1 whitespace-pre-line leading-6 text-gray-800">
                      {project.description}
                    </p>
                  )}
                  {project.link && (
                    <p className="text-xs mt-1 text-gray-700 break-all">
                      {project.link}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </ATSSection>
        )}

        {resume.certifications && resume.certifications.length > 0 && (
          <ATSSection title="Certifications">
            <div className="space-y-2">
              {resume.certifications.map((cert, i) => (
                <p key={i} className="text-sm text-gray-800">
                  <span className="font-medium text-black">
                    {cert.name || "Certification"}
                  </span>
                  {cert.issuer ? ` — ${cert.issuer}` : ""}
                  {cert.year ? ` (${cert.year})` : ""}
                </p>
              ))}
            </div>
          </ATSSection>
        )}

        {resume.languages && resume.languages.length > 0 && (
          <ATSSection title="Languages">
            <p className="text-sm text-gray-800">
              {resume.languages
                .map(
                  (lang) =>
                    `${lang.name || "Language"}${
                      lang.level ? ` (${lang.level})` : ""
                    }`
                )
                .join(" • ")}
            </p>
          </ATSSection>
        )}

        {resume.customSections?.map((section, i) => (
          <ATSSection key={i} title={section.title || "Custom Section"}>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
              {section.items?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </ATSSection>
        ))}
      </div>
    </div>
  );
}

function ATSSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-5">
      <h2 className="text-sm font-bold uppercase border-b border-black pb-1 mb-2 text-black">
        {title}
      </h2>
      {children}
    </section>
  );
}