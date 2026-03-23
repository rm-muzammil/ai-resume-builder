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

export default function TemplateSidebar({ resume }: { resume: ResumeData }) {
  const personal = resume.personalInfo || {};

  return (
    <div className="bg-white text-gray-900 border border-gray-200 rounded-xl overflow-hidden shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Sidebar */}
        <aside className="bg-gray-100 p-6 md:col-span-1 border-r border-gray-200">
          <h1 className="text-2xl font-bold">{personal.name || "Your Name"}</h1>
          <p className="text-blue-600 font-medium mt-1">{personal.headline || "Professional Title"}</p>

          <SidebarSection title="Contact">
            <div className="space-y-1 text-sm text-gray-700">
              {personal.email && <p>{personal.email}</p>}
              {personal.phone && <p>{personal.phone}</p>}
              {personal.address && <p>{personal.address}</p>}
              {Array.isArray(resume.contactLinks) &&
                resume.contactLinks.map((link, i) => (
                  <p key={i}>
                    <span className="font-medium">{link.label}:</span> {link.url}
                  </p>
                ))}
            </div>
          </SidebarSection>

          {resume.skills && resume.skills.length > 0 && (
            <SidebarSection title="Skills">
              <div className="flex flex-wrap gap-2">
                {resume.skills.map((skill, i) => (
                  <span key={i} className="text-xs bg-white border border-gray-300 px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </SidebarSection>
          )}

          {resume.languages && resume.languages.length > 0 && (
            <SidebarSection title="Languages">
              <div className="space-y-1 text-sm">
                {resume.languages.map((lang, i) => (
                  <p key={i}>
                    {lang.name || "Language"} {lang.level ? `• ${lang.level}` : ""}
                  </p>
                ))}
              </div>
            </SidebarSection>
          )}

          {resume.certifications && resume.certifications.length > 0 && (
            <SidebarSection title="Certifications">
              <div className="space-y-2 text-sm">
                {resume.certifications.map((cert, i) => (
                  <p key={i}>
                    <span className="font-medium">{cert.name || "Certification"}</span>
                    {cert.issuer ? ` — ${cert.issuer}` : ""}
                    {cert.year ? ` (${cert.year})` : ""}
                  </p>
                ))}
              </div>
            </SidebarSection>
          )}
        </aside>

        {/* Main Content */}
        <main className="p-6 md:col-span-2">
          {resume.professionalSummary && (
            <MainSection title="Professional Summary">
              <p className="text-sm leading-6 whitespace-pre-line text-gray-700">
                {resume.professionalSummary}
              </p>
            </MainSection>
          )}

          {resume.experience && resume.experience.length > 0 && (
            <MainSection title="Experience">
              <div className="space-y-5">
                {resume.experience.map((exp, i) => (
                  <div key={i}>
                    <div className="flex flex-col md:flex-row md:justify-between gap-1">
                      <div>
                        <h3 className="font-semibold">{exp.role || "Role"}</h3>
                        <p className="text-sm text-gray-700">{exp.company || "Company"}</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        {exp.startDate || "Start"} {exp.endDate ? `— ${exp.endDate}` : ""}
                      </p>
                    </div>
                    {exp.description && (
                      <p className="text-sm mt-2 leading-6 whitespace-pre-line text-gray-700">
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </MainSection>
          )}

          {resume.education && resume.education.length > 0 && (
            <MainSection title="Education">
              <div className="space-y-5">
                {resume.education.map((edu, i) => (
                  <div key={i}>
                    <div className="flex flex-col md:flex-row md:justify-between gap-1">
                      <div>
                        <h3 className="font-semibold">
                          {edu.degree || "Degree"} {edu.field ? `in ${edu.field}` : ""}
                        </h3>
                        <p className="text-sm text-gray-700">{edu.school || "Institution"}</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        {edu.startDate || "Start"} {edu.endDate ? `— ${edu.endDate}` : ""}
                      </p>
                    </div>
                    {edu.description && (
                      <p className="text-sm mt-2 leading-6 whitespace-pre-line text-gray-700">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </MainSection>
          )}

          {resume.projects && resume.projects.length > 0 && (
            <MainSection title="Projects">
              <div className="space-y-5">
                {resume.projects.map((project, i) => (
                  <div key={i}>
                    <h3 className="font-semibold">{project.name || "Project"}</h3>
                    {project.techStack && <p className="text-sm text-gray-600">{project.techStack}</p>}
                    {project.description && (
                      <p className="text-sm mt-2 leading-6 whitespace-pre-line text-gray-700">
                        {project.description}
                      </p>
                    )}
                    {project.link && (
                      <p className="text-sm mt-1 text-blue-600 break-all">{project.link}</p>
                    )}
                  </div>
                ))}
              </div>
            </MainSection>
          )}

          {resume.customSections?.map((section, i) => (
            <MainSection key={i} title={section.title || "Custom Section"}>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                {section.items?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </MainSection>
          ))}
        </main>
      </div>
    </div>
  );
}

function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-6">
      <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">{title}</h2>
      {children}
    </section>
  );
}

function MainSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-7">
      <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-500 mb-3">{title}</h2>
      {children}
    </section>
  );
}