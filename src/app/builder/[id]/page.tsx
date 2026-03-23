"use client";

import { useEffect, useState, use } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import ResumePreview from "@/components/resume/ResumePreview";
import ExportPDFButton from "@/components/resume/ExportPDFButton";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Resume } from "@/types/resume";


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
  const { id } = use(params);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await axios.get(`/api/resume/${id}`);
        if (res.data.success) setResume(res.data.resume);
        else setError(res.data.message || "Resume not found");
      } catch (err) {
        console.error(err);
        setError("Failed to fetch resume");
      } finally {
        setLoading(false);
      }
    };
    fetchResume();
  }, [id]);

  if (loading) return <div className="p-6 text-center text-gray-500">Loading...</div>;
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>;
  if (!resume) return <div className="p-6 text-center text-gray-500">Resume not found</div>;

  const saveStep = async () => {
    if (!resume) return;
    setSaving(true);
    try {
const { 
        id: _id, 
        userId: _userId, 
        createdAt: _createdAt, 
        updatedAt: _updatedAt, 
        ...updateData 
      } = resume;
      await axios.put(`/api/resume/${resume.id}`, updateData);
    } catch (err) {
      console.error(err);
      setError("Save failed.");
    } finally {
      setSaving(false);
    }
  };

  const handleNext = async () => {
    await saveStep();
    if (step < 6) setStep((prev) => (prev + 1) as Step);
    else router.push("/builder");
  };
  const handleBack = () => { if (step > 1) setStep((prev) => (prev - 1) as Step); };

  const handleAI = async () => {
    try {
      setAiLoading(true);
      const res = await axios.post("/api/ai/summary", {
       resumeText: JSON.stringify(resume), // 3. Simplified JSON payload
      });
      if (res.data.success) setResume((prev) => prev ? { ...prev, professionalSummary: res.data.summary } : prev);
    } catch (err) {
      console.error(err);
      alert("AI summary generation failed.");
    } finally { setAiLoading(false); }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Template Selector */}
      <Card className="mb-6">
        <CardContent>
          <h3 className="text-lg font-semibold mb-3">Choose Template</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { key: "modern", label: "Modern" },
              { key: "ats", label: "ATS Clean" },
              { key: "sidebar", label: "Sidebar Pro" },
            ].map((template) => (
              <Button
                key={template.key}
                variant={resume.templateKey === template.key ? "default" : "outline"}
                onClick={async () => {
                  setResume({ ...resume, templateKey: template.key });
                  await axios.put(`/api/resume/${resume.id}`, { templateKey: template.key });
                }}
              >
                {template.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="mx-auto grid xl:grid-cols-7 gap-6">
        {/* LEFT: Builder */}
        <Card className="sticky top-6 border rounded-2xl p-6 xl:col-span-3">
          <CardContent>
            <h1 className="text-2xl font-bold mb-1">Resume Builder</h1>
            <p className="text-sm text-gray-500 mb-4">Step {step} of 6</p>

            {/* --- STEP 1: Personal Info --- */}
            {step === 1 && (
              <div className="space-y-3">
                <h2 className="text-xl font-semibold">Personal Info</h2>
                {["name", "headline", "email", "phone", "address"].map((key) => (
                  <Input
                    key={key}
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                    value={resume.personalInfo[key as keyof typeof resume.personalInfo] || ""}
                    onChange={(e) =>
                      setResume({
                        ...resume,
                        personalInfo: { ...resume.personalInfo, [key]: e.target.value },
                      })
                    }
                  />
                ))}
              </div>
            )}

            {/* --- STEP 2: Contact Links --- */}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-2">Contact Links</h2>
                {(resume.socialLinks || []).map((link, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input
                      placeholder="Label"
                      value={link.platform}
                      onChange={(e) => {
                        const updated = [...resume.socialLinks];
                        updated[idx] = { ...updated[idx], platform: e.target.value };
                        setResume({ ...resume, socialLinks: updated });
                      }}
                    />
                    <div className="flex gap-2">
                      <Input
                        placeholder="URL"
                        value={link.url}
                        onChange={(e) => {
                          const updated = [...resume.socialLinks];
                          updated[idx] = { ...updated[idx], url: e.target.value };
                          setResume({ ...resume, socialLinks: updated });
                        }}
                      />
                      <Button
                        variant="destructive"
                        onClick={() => {
                          const updated = resume.socialLinks.filter((_, i) => i !== idx);
                          setResume({ ...resume, socialLinks: updated });
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
               <Button
  variant="secondary"
  onClick={() =>
    setResume({
      ...resume,
      socialLinks: [
        ...(resume.socialLinks || []),
        { 
          id: crypto.randomUUID(), // Adds the missing unique ID
          platform: "",            // Changed 'label' to 'platform' to match your type
          url: "" 
        }
      ]
    })
  }
>
  + Add Link
</Button>
              </div>
            )}

            {/* --- STEP 3: Skills --- */}
            {step === 3 && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Skills</h2>
                <Input
                  placeholder="Add skill and press Enter"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.currentTarget.value.trim()) {
                      setResume({ ...resume, skills: [...resume.skills, e.currentTarget.value.trim()] });
                      e.currentTarget.value = "";
                    }
                  }}
                />
                <div className="flex flex-wrap gap-2 mt-2">
                  {resume.skills.map((s, i) => (
                    <span key={i} className="bg-primary text-primary-foreground px-2 py-1 rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* --- STEP 4: Education --- */}
            {step === 4 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-2">Education</h2>
                {(resume.education || []).map((edu, idx) => (
                  <Card key={idx} className="p-3">
                    <Input
                      placeholder="Degree"
                      value={edu.degree || ""}
                      onChange={(e) => {
                        const updated = [...resume.education];
                        updated[idx].degree = e.target.value;
                        setResume({ ...resume, education: updated });
                      }}
                      className="mb-2"
                    />
                    <Input
                      placeholder="School"
                      value={edu.school || ""}
                      onChange={(e) => {
                        const updated = [...resume.education];
                        updated[idx].school = e.target.value;
                        setResume({ ...resume, education: updated });
                      }}
                      className="mb-2"
                    />
                    <div className="flex gap-2">
                      <Input
                        placeholder="Start Date"
                        value={edu.startDate || ""}
                        onChange={(e) => {
                          const updated = [...resume.education];
                          updated[idx].startDate = e.target.value;
                          setResume({ ...resume, education: updated });
                        }}
                      />
                      <Input
                        placeholder="End Date"
                        value={edu.endDate || ""}
                        onChange={(e) => {
                          const updated = [...resume.education];
                          updated[idx].endDate = e.target.value;
                          setResume({ ...resume, education: updated });
                        }}
                      />
                    </div>
                  </Card>
                ))}
<Button
  onClick={() =>
    setResume({
      ...resume,
      education: [
        ...(resume.education || []), 
        { 
          id: crypto.randomUUID(), // Fixes the missing 'id' error
          degree: "", 
          school: "", 
          startDate: "", 
          endDate: "",
          description: "" // Add this if it's in your Education interface
        }
      ],
    })
  }
>
  + Add Education
</Button>
              </div>
            )}

            {/* --- STEP 5: AI Professional Summary --- */}
            {step === 5 && (
              <div className="space-y-3">
                <h2 className="text-xl font-semibold">AI Professional Summary</h2>
                <Textarea
                  value={resume.professionalSummary || ""}
                  onChange={(e) => setResume({ ...resume, professionalSummary: e.target.value })}
                  placeholder="Your professional summary..."
                />
                <Button onClick={handleAI} disabled={aiLoading}>
                  {aiLoading ? "Generating..." : "Generate AI Summary"}
                </Button>
              </div>
            )}

            {/* --- STEP 6: Custom Sections --- */}
            {step === 6 && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Custom Sections</h2>
                  <Button
                    onClick={() =>
                      setResume({
                        ...resume,
                        customSections: [
                          ...(resume.customSections || []),
                          { id: Date.now().toString(), title: "", content: "" },
                        ],
                      })
                    }
                  >
                    + Add Section
                  </Button>
                </div>
                {(resume.customSections || []).map((section, idx) => (
                  <Card key={section.id} className="p-4">
                    <Input
                      placeholder="Section Title"
                      value={section.title || ""}
                      onChange={(e) => {
                        const updated = [...resume.customSections];
                        updated[idx] = { ...updated[idx], title: e.target.value };
                        setResume({ ...resume, customSections: updated });
                      }}
                      className="mb-2"
                    />
                    <Textarea
                      placeholder="Content (one item per line)"
                      value={section.content || ""}
                      onChange={(e) => {
                        const updated = [...resume.customSections];
                        updated[idx] = { ...updated[idx], content: e.target.value };
                        setResume({ ...resume, customSections: updated });
                      }}
                    />
                  </Card>
                ))}
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <Button onClick={handleBack} disabled={step === 1} variant="outline">
                Back
              </Button>
              <Button onClick={handleNext} disabled={saving}>
                {saving ? "Saving..." : step === 6 ? "Finish & Save" : "Next"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* RIGHT: Live Preview */}
        <div className="sticky top-6 space-y-4 xl:col-span-4">
          <Card className="overflow-auto border rounded-2xl p-4 bg-card">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Live Preview</h2>
            <ExportPDFButton resumeId={resume.id} />
          </div>
            <div className="scale-[1] origin-top-left">
             <ResumePreview resume={resume} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}