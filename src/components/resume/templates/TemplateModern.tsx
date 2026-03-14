// type Resume = {
//   id?: string;
//   title?: string;
//   templateKey?: string;
//   personalInfo?: {
//     name?: string;
//     headline?: string;
//     phone?: string;
//     email?: string;
//     address?: string;
//   };
//   contactLinks?: { label: string; url: string }[];
//   professionalSummary?: string;
//   skills?: string[];
//   education?: {
//     institution?: string;
//     degree?: string;
//     field?: string;
//     startDate?: string;
//     endDate?: string;
//     description?: string;
//   }[];
//   experience?: {
//     company?: string;
//     role?: string;
//     startDate?: string;
//     endDate?: string;
//     description?: string;
//   }[];
//   projects?: {
//     name?: string;
//     description?: string;
//     technologies?: string[];
//     link?: string;
//   }[];
//   certifications?: {
//     name?: string;
//     issuer?: string;
//     year?: string;
//   }[];
//   languages?: {
//     name?: string;
//     level?: string;
//   }[];
//   customSections?: {
//     title: string;
//     items: string[];
//   }[];
// };

// type Props = {
//   resume: Resume;
// };

// function SectionTitle({ title }: { title: string }) {
//   return (
//     <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-300 pb-1 mb-3 mt-6">
//       {title}
//     </h3>
//   );
// }

// export default function TemplateModern({ resume }: Props) {
//   const {
//     personalInfo,
//     contactLinks = [],
//     professionalSummary,
//     skills = [],
//     education = [],
//     experience = [],
//     projects = [],
//     certifications = [],
//     languages = [],
//     customSections = [],
//   } = resume;

//   return (
//     <div className="bg-white text-slate-900 shadow-2xl rounded-2xl overflow-hidden min-h-[1123px] w-full max-w-[850px] mx-auto">
//       <div className="p-8 md:p-10">
//         {/* Header */}
//         <div className="border-b border-slate-300 pb-6">
//           <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
//             {personalInfo?.name || "Your Name"}
//           </h1>

//           <p className="text-lg text-slate-600 mt-2">
//             {personalInfo?.headline || "Professional Headline"}
//           </p>
//           <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">

//           <p className="text-m text-slate-600 mt-2">
//             {personalInfo?.phone || "Phone Number"}
//           </p>
//           <p className="text-md text-slate-600 mt-2">
//             {personalInfo?.email || "Email"}
//           </p>
//           </div>

//           <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
//             {personalInfo?.address && <span>{personalInfo.address}</span>}

//             {contactLinks.map((link, index) => (
//               <span key={index}>
//                 <span className="font-medium">{link.label}:</span>{" "}
//                 <span className="break-all">{link.url}</span>
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Summary */}
//         {professionalSummary && (
//           <div>
//             <SectionTitle title="Professional Summary" />
//             <p className="text-sm leading-5 text-slate-700 whitespace-pre-line">
//               {professionalSummary}
//             </p>
//           </div>
//         )}

//         {/* Skills */}
//         {(skills || []).length > 0 && (
//           <div>
//             <SectionTitle title="Skills" />
//             <div className="flex flex-wrap gap-2">
//               {skills.map((skill, index) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1 rounded-full bg-slate-100 text-sm text-slate-700 border border-slate-200"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Experience */}
//         {(experience || []).length > 0 && (
//           <div>
//             <SectionTitle title="Experience" />
//             <div className="space-y-5">
//               {experience.map((exp, index) => (
//                 <div key={index}>
//                   <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
//                     <div>
//                       <h4 className="font-semibold text-base">
//                         {exp.role || "Role"}
//                       </h4>
//                       <p className="text-sm text-slate-600">
//                         {exp.company || "Company"}
//                       </p>
//                     </div>

//                     <p className="text-xs text-slate-500">
//                       {exp.startDate || "Start"} - {exp.endDate || "Present"}
//                     </p>
//                   </div>

//                   {exp.description && (
//                     <p className="text-sm text-slate-700 mt-2 whitespace-pre-line">
//                       {exp.description}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Education */}
//         {(education || []).length > 0 && (
//           <div>
//             <SectionTitle title="Education" />
//             <div className="space-y-5">
//               {education.map((edu, index) => (
//                 <div key={index}>
//                   <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
//                     <div>
//                       <h4 className="font-semibold text-base">
//                         {edu.degree || "Degree"} {edu.field ? `in ${edu.field}` : ""}
//                       </h4>
//                       <p className="text-sm text-slate-600">
//                         {edu.institution || "Institution"}
//                       </p>
//                     </div>

//                     <p className="text-xs text-slate-500">
//                       {edu.startDate || "Start"} - {edu.endDate || "End"}
//                     </p>
//                   </div>

//                   {edu.description && (
//                     <p className="text-sm text-slate-700 mt-2 whitespace-pre-line">
//                       {edu.description}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Projects */}
//         {(projects || []).length > 0 && (
//           <div>
//             <SectionTitle title="Projects" />
//             <div className="space-y-5">
//               {projects.map((project, index) => (
//                 <div key={index}>
//                   <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
//                     <h4 className="font-semibold text-base">
//                       {project.name || "Project Name"}
//                     </h4>

//                     {project.link && (
//                       <p className="text-xs text-slate-500 break-all">
//                         {project.link}
//                       </p>
//                     )}
//                   </div>

//                   {project.description && (
//                     <p className="text-sm text-slate-700 mt-2 whitespace-pre-line">
//                       {project.description}
//                     </p>
//                   )}

//                   {project.technologies && project.technologies.length > 0 && (
//                     <div className="flex flex-wrap gap-2 mt-2">
//                       {project.technologies.map((tech, techIndex) => (
//                         <span
//                           key={techIndex}
//                           className="px-2 py-1 rounded bg-slate-100 text-xs text-slate-600 border border-slate-200"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Certifications */}
//         {(certifications || []).length > 0 && (
//           <div>
//             <SectionTitle title="Certifications" />
//             <div className="space-y-3">
//               {certifications.map((cert, index) => (
//                 <div key={index}>
//                   <p className="font-medium text-sm">{cert.name || "Certification"}</p>
//                   <p className="text-xs text-slate-600">
//                     {cert.issuer || "Issuer"} {cert.year ? `• ${cert.year}` : ""}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Languages */}
//         {(languages || []).length > 0 && (
//           <div>
//             <SectionTitle title="Languages" />
//             <div className="space-y-2">
//               {languages.map((lang, index) => (
//                 <p key={index} className="text-sm text-slate-700">
//                   <span className="font-medium">{lang.name || "Language"}</span>
//                   {lang.level ? ` — ${lang.level}` : ""}
//                 </p>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Custom Sections */}
//         {(customSections || []).length > 0 &&
//           customSections.map((section, index) => (
//             <div key={index}>
//               {section.title && <SectionTitle title={section.title} />}
//               <div className="space-y-2">
//                 {(section.items || []).map((item, itemIndex) => (
//                   <p key={itemIndex} className="text-sm text-slate-700">
//                     • {item}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

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
  id: string; // Good for React keys
  title: string;
  content: string; // Changing 'items: string[]' to 'content: string'
};

type ResumeData = {
  title?: string;
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

export default function TemplateModern({ resume }: { resume: ResumeData }) {
  const personal = resume.personalInfo || {};

  const hasContactLine =
    personal.email ||
    personal.phone ||
    personal.address ||
    (resume.contactLinks && resume.contactLinks.length > 0);

  return (
    <div className="bg-white text-gray-900 shadow-lg rounded-xl overflow-hidden border border-gray-200">
      <div className="p-8 md:p-10">
        {/* Header */}
        <header className="border-b border-gray-300 pb-5 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {personal.name || "Your Name"}
          </h1>

          <p className="text-lg text-blue-600 font-medium mt-1">
            {personal.headline || "Professional Title"}
          </p>

          {hasContactLine && (
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
              {personal.email && <span>{personal.email}</span>}
              {personal.phone && <span>{personal.phone}</span>}
              {personal.address && <span>{personal.address}</span>}

              {resume.contactLinks?.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {link.label || "Link"}
                </a>
              ))}
            </div>
          )}
        </header>

        {/* Summary */}
        {resume.professionalSummary && (
          <Section title="Professional Summary">
            <p className="text-sm leading-6 text-gray-700 whitespace-pre-line">
              {resume.professionalSummary}
            </p>
          </Section>
        )}

        {/* Skills */}
        {resume.skills && resume.skills.length > 0 && (
          <Section title="Skills">
            <div className="flex flex-wrap gap-2">
              {resume.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-gray-100 border border-gray-200 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Section>
        )}

        {/* Experience */}
        {resume.experience && resume.experience.length > 0 && (
          <Section title="Experience">
            <div className="space-y-5">
              {resume.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <div>
                      <h3 className="font-semibold text-base">
                        {exp.role || "Role"}
                      </h3>
                      <p className="text-sm text-gray-700">
                        {exp.company || "Company"}
                      </p>
                    </div>

                    <p className="text-xs text-gray-500">
                      {exp.startDate || "Start"} {exp.endDate ? `— ${exp.endDate}` : ""}
                    </p>
                  </div>

                  {exp.description && (
                    <p className="text-sm text-gray-700 mt-2 whitespace-pre-line leading-6">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Education */}
        {resume.education && resume.education.length > 0 && (
          <Section title="Education">
            <div className="space-y-5">
              {resume.education.map((edu, index) => (
                <div key={index}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <div>
                      <h3 className="font-semibold text-base">
                        {edu.degree || "Degree"} {edu.field ? `in ${edu.field}` : ""}
                      </h3>
                      <p className="text-sm text-gray-700">
                        {edu.school || "Institution"}
                      </p>
                    </div>

                    <p className="text-xs text-gray-500">
                      {edu.startDate || "Start"} {edu.endDate ? `— ${edu.endDate}` : ""}
                    </p>
                  </div>

                  {edu.description && (
                    <p className="text-sm text-gray-700 mt-2 whitespace-pre-line leading-6">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Projects */}
        {resume.projects && resume.projects.length > 0 && (
          <Section title="Projects">
            <div className="space-y-5">
              {resume.projects.map((project, index) => (
                <div key={index}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <div>
                      <h3 className="font-semibold text-base">
                        {project.name || "Project Name"}
                      </h3>
                      {project.techStack && (
                        <p className="text-sm text-gray-600">{project.techStack}</p>
                      )}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        View Project
                      </a>
                    )}
                  </div>

                  {project.description && (
                    <p className="text-sm text-gray-700 mt-2 whitespace-pre-line leading-6">
                      {project.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Certifications */}
        {resume.certifications && resume.certifications.length > 0 && (
          <Section title="Certifications">
            <div className="space-y-3">
              {resume.certifications.map((cert, index) => (
                <div key={index} className="text-sm text-gray-700">
                  <span className="font-medium">{cert.name || "Certification"}</span>
                  {cert.issuer ? ` — ${cert.issuer}` : ""}
                  {cert.year ? ` (${cert.year})` : ""}
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Languages */}
        {resume.languages && resume.languages.length > 0 && (
          <Section title="Languages">
            <div className="flex flex-wrap gap-2">
              {resume.languages.map((lang, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-gray-100 border border-gray-200 rounded-full"
                >
                  {lang.name || "Language"} {lang.level ? `• ${lang.level}` : ""}
                </span>
              ))}
            </div>
          </Section>
        )}

        {/* Custom Sections */}
{resume.customSections && resume.customSections.length > 0 && (
  <>
    {resume.customSections.map((section, index) => (
      <Section key={section.id || index} title={section.title || "Custom Section"}>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          {/* Split content by new lines to create bullet points automatically */}
          {(section.content || "")
            .split("\n")
            .filter((line) => line.trim() !== "") // Remove empty lines
            .map((line, lineIndex) => (
              <li key={lineIndex}>{line}</li>
            ))}
        </ul>
      </Section>
    ))}
  </>
)}
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-7 last:mb-0">
      <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-500 mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}