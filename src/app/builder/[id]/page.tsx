"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { use } from "react";
import ResumePreview from "@/components/resume/ResumePreview";

type CustomSection = {
  id: string; // Unique ID for keying in React
  title: string;
  content: string;
};


type Resume = {
  id: string;
  title: string;
  templateKey: string;
  personalInfo: any;
  socialLinks: { label: string; url: string }[];
  skills: string[];
  education: any[];
  experience: any[];
  projects: any[];
  certifications: any[];
  languages: string[];
  professionalSummary: string;
  // customSections: any;
  customSections: CustomSection[];
};

type Step = 1 | 2 | 3 | 4 | 5 | 6;

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ResumeBuilder({ params }: PageProps) {
  const router = useRouter();
  const [resume, setResume] = useState<Resume | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [step, setStep] = useState<Step>(1);
  const [saving, setSaving] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const {id} = use(params);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await axios.get(`/api/resumes/${id}`);
        if (res.data.success) {
          setResume(res.data.resume);
        } else {
          setError(res.data.message || "Resume not found");
        }
      } catch (err) {
        console.error("Failed to fetch resume", err);
        setError("Failed to fetch resume");
      } finally {
        setLoading(false);
      }
    };
    fetchResume();
  }, [id]);

  if (loading) return <div className="p-6 text-white">Loading...</div>;
  if (error) return <div className="p-6 text-red-400">{error}</div>;
  if (!resume) return <div className="p-6 text-white">Resume not found</div>;

  // const saveStep = async () => {
  //   try {
  //     await axios.put(`/api/resumes/${resume.id}`, resume);
  //   } catch (err) {
  //     console.error("Failed to save step", err);
  //   }
  // };

  const saveStep = async () => {
  if (!resume) return;
  setSaving(true);
  try {
    // Destructure to remove fields that shouldn't be updated directly
    // or that Prisma might complain about if they are in the 'data' block
    const { id, userId, createdAt, updatedAt, ...updateData } = resume as any;

    const res = await axios.put(`/api/resumes/${resume.id}`, updateData);
    
    if (res.data.success) {
      console.log("Step saved successfully");
    }
  } catch (err) {
    console.error("Failed to save step", err);
    setError("Save failed. Please check your connection.");
  } finally {
    setSaving(false);
  }
};
const handleNext = async () => {
  try {
    setSaving(true);
    await saveStep();

    if (step < 6) {
      setStep((prev) => (prev + 1) as Step);
    } else {
      alert("Resume saved successfully!");
      router.push("/builder"); // or router.push(`/resume/${resume.id}/preview`)
    }
  } catch (err) {
    console.error("Failed to save step", err);
    alert("Failed to save resume");
  } finally {
    setSaving(false);
  }
};

  const handleBack = () => {
    if (step > 1) setStep((prev) => (prev - 1) as Step);
  };

  // const handleAI = async () => {
  //   try {
  //     const res = await axios.post("/api/ai/summary", { resumeText: JSON.stringify(resume) });
  //     if (res.data.success) setResume({ ...resume, professionalSummary: res.data.summary.professionalSummary });
  //   } catch (err) {
  //     console.error("AI summary generation failed", err);
  //   }
  // };

  const handleAI = async () => {
  try {
    setAiLoading(true);

    const res = await axios.post("/api/ai/summary", {
      resumeText: JSON.stringify({
        personalInfo: resume.personalInfo,
        socialLinks: resume.socialLinks,
        skills: resume.skills,
        education: resume.education,
        experience: resume.experience,
        projects: resume.projects,
        certifications: resume.certifications,
        languages: resume.languages,
      }),
    });

    console.log("AI API RESPONSE:", res.data);

    if (res.data.success) {
      setResume((prev) =>
        prev
          ? {
              ...prev,
              professionalSummary: res.data.summary,
            }
          : prev
      );
    } else {
      alert(res.data.message || "Failed to generate summary");
    }
  } catch (err: any) {
    console.error("AI summary generation failed", err?.response?.data || err);
    alert(
      err?.response?.data?.message ||
        "AI summary generation failed. Check terminal logs."
    );
  } finally {
    setAiLoading(false);
  }
};
  return (


  <div className="min-h-screen bg-slate-950 text-white">
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
        
        {/* LEFT: Builder Form */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sticky top-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Resume Builder</h1>
            <p className="text-slate-400 text-sm mt-1">
              Step {step} of 6
            </p>
          </div>

              <div className="min-h-screen p-6 bg-slate-950 text-white  mx-auto">
      <h1 className="text-3xl font-bold mb-6">{resume.title}</h1>

      {/* Step Wizard */}
      {step === 1 && (
        <div>
          <h2 className="text-xl mb-4">Step 1 — Personal Info</h2>
          {["name","headline", "email", "phone", "address"].map((key) => (
            <input
              key={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={resume.personalInfo?.[key] || ""}
              onChange={(e) =>
                setResume({ ...resume, personalInfo: { ...resume.personalInfo, [key]: e.target.value } })
              }
              className="input mb-2 w-full"
            />
          ))}
        </div>
      )}


{step === 2 && (
  <div>
    <h2 className="text-xl mb-4">Step 2 — Contact Links</h2>

    <div className="space-y-4">
      {/* SAFE MAP: Ensures we only map if it's truly an array */}
      {(Array.isArray(resume?.socialLinks) ? resume.socialLinks : []).map((link, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center"
        >
          <input
            type="text"
            placeholder="Label (e.g. LinkedIn, GitHub, Portfolio)"
            value={link.label || ""}
            onChange={(e) => {
              if (!resume) return;
              const updated = [...(Array.isArray(resume.socialLinks) ? resume.socialLinks : [])];
              updated[index] = { ...updated[index], label: e.target.value };
              setResume({ ...resume, socialLinks: updated });
            }}
            className="input w-full p-2 border rounded"
          />

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="https://example.com"
              value={link.url || ""}
              onChange={(e) => {
                if (!resume) return;
                const updated = [...(Array.isArray(resume.socialLinks) ? resume.socialLinks : [])];
                updated[index] = { ...updated[index], url: e.target.value };
                setResume({ ...resume, socialLinks: updated });
              }}
              className="input w-full p-2 border rounded"
            />

            <button
              type="button"
              onClick={() => {
                if (!resume) return;
                const updated = (Array.isArray(resume.socialLinks) ? resume.socialLinks : []).filter(
                  (_, i) => i !== index
                );
                setResume({ ...resume, socialLinks: updated });
              }}
              className="px-3 py-2 rounded bg-red-500 text-white hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={() => {
          if (!resume) return;
          setResume({
            ...resume,
            socialLinks: [
              ...(Array.isArray(resume.socialLinks) ? resume.socialLinks : []),
              { label: "", url: "" },
            ],
          });
        }}
        className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700"
      >
        + Add Link
      </button>
    </div>
  </div>
)}


      {step === 3 && (
        <div>
          <h2 className="text-xl mb-4">Step 3 — Skills</h2>
          <input
            placeholder="Add skill and press Enter"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.currentTarget.value.trim()) {
                setResume({ ...resume, skills: [...resume.skills, e.currentTarget.value.trim()] });
                e.currentTarget.value = "";
              }
            }}
            className="input mb-2 w-full"
          />
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((s, i) => (
              <span key={i} className="bg-blue-500 px-2 py-1 rounded">
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2 className="text-xl mb-4">Step 4 — Education</h2>
          {resume.education.map((edu, idx) => (
            <div key={idx} className="mb-2">
              <input
                placeholder="Degree"
                value={edu.degree || ""}
                onChange={(e) => {
                  const newEdu = [...resume.education];
                  newEdu[idx].degree = e.target.value;
                  setResume({ ...resume, education: newEdu });
                }}
                className="input mb-1 w-full"
              />
              <input
                placeholder="School"
                value={edu.school || ""}
                onChange={(e) => {
                  const newEdu = [...resume.education];
                  newEdu[idx].school = e.target.value;
                  setResume({ ...resume, education: newEdu });
                }}
                className="input mb-1 w-full"
              />
            </div>
          ))}
          <button
            className="bg-green-500 px-4 py-2 rounded mt-2"
            onClick={() =>
              setResume({ ...resume, education: [...resume.education, { degree: "", school: "", startDate: "", endDate: "" }] })
            }
          >
            Add Education
          </button>
        </div>
      )}

{step === 5 && (
  <div>
    <h2 className="text-xl mb-4">Step 5 — AI Professional Summary</h2>

    <textarea
      value={resume.professionalSummary || ""}
      onChange={(e) =>
        setResume({ ...resume, professionalSummary: e.target.value })
      }
      className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 h-32 mb-2"
      placeholder="Your professional summary will appear here..."
    />

    <button
      className="bg-green-500 px-4 py-2 rounded"
      onClick={handleAI}
      disabled={aiLoading}
    >
      {aiLoading ? "Generating..." : "Generate AI Summary"}
    </button>
  </div>
)}

{step === 6 && (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold">Step 6 — Custom Sections</h2>
      <button
        type="button"
        onClick={() => {
          if (!resume) return;
          const newSection = { id: Date.now().toString(), title: "", content: "" };
          setResume({
            ...resume,
            customSections: [...(Array.isArray(resume.customSections) ? resume.customSections : []), newSection],
          });
        }}
        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm transition"
      >
        + Add New Section
      </button>
    </div>

    <div className="space-y-8">
{(Array.isArray(resume?.customSections) ? resume.customSections : []).map((section, index) => (
  <div key={section.id || index} className="space-y-3 p-4 border rounded-lg">
    <div>
      <label className="block text-sm font-medium mb-1">Section Title</label>
      <input
        type="text"
        placeholder="e.g. Languages"
        value={section.title || ""}
        onChange={(e) => {
          const updated = [...resume.customSections];
          updated[index] = { ...updated[index], title: e.target.value };
          setResume({ ...resume, customSections: updated });
        }}
        className="w-full p-2 border rounded"
      />
    </div>
    
    <div>
      <label className="block text-sm font-medium mb-1">Content (One item per line)</label>
      <textarea
        placeholder="English - Native&#10;German - Intermediate"
        value={section.content || ""}
        rows={3}
        onChange={(e) => {
          const updated = [...resume.customSections];
          updated[index] = { ...updated[index], content: e.target.value };
          setResume({ ...resume, customSections: updated });
        }}
        className="w-full p-2 border rounded bg-white text-black"
      />
    </div>
  </div>
))}

      {resume?.customSections?.length === 0 && (
        <p className="text-gray-500 text-center py-10 border-2 border-dashed rounded-lg">
          No custom sections added yet. Click the button above to add things like "Languages" or "Hobbies".
        </p>
      )}
    </div>
  </div>
)}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {step > 1 && <button onClick={handleBack} className="px-4 py-2 bg-gray-500 rounded">Back</button>}
        <button onClick={handleNext} className="px-4 py-2 bg-blue-500 rounded">
          {/* {step === 6 ? "Finish & Save" : "Next"} */}
          {saving ? "Saving..." : step === 6 ? "Finish & Save" : "Next"}
        </button>
      </div>
    </div>

          {/* Your existing step content goes here */}
          {/* Keep all your current step blocks exactly here */}

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              disabled={step === 1}
              onClick={() => setStep((prev) => Math.max(1, prev - 1)as Step)}
              className="px-4 py-2 rounded-xl bg-slate-800 disabled:opacity-50"
            >
              Previous
            </button>

            {step < 6 ? (
              <button
                type="button"
                onClick={async () => {
                  await saveStep();
                  setStep((prev) => Math.min(6, prev + 1)as Step);
                }}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500"
              >
                Save & Next
              </button>
            ) : (
              <button
                type="button"
                onClick={async () => {
                  await saveStep();
                  alert("Resume saved successfully!");
                }}
                className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-500"
              >
                Finish
              </button>
            )}
          </div>
        </div>

        {/* RIGHT: Live Preview */}
        <div className="xl:sticky xl:top-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Live Preview</h2>
            <span className="text-xs text-slate-400">
              Template: {resume?.templateKey || "modern-pro"}
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 overflow-auto">
            <div className="scale-[0.8] origin-top">
              <ResumePreview resume={resume} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}