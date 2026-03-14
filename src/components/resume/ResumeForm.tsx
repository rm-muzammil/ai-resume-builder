"use client";

import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

// ... [Types remain the same] ...
type Education = {

  id: string;

  school: string;

  degree: string;

  startDate: string;

  endDate: string;

};



type Experience = {

  id: string;

  company: string;

  title: string;

  startDate: string;

  endDate: string;

  description: string;

};



type Project = {

  id: string;

  name: string;

  link?: string;

  description?: string;

};



type Resume = {

  id: string;

  title: string;

  professionalSummary?: string;

  personalInfo: any;

  education: Education[];

  experience: Experience[];

  skills: string[];

  projects: Project[];

  socialLinks?: any;

};



type ResumeFormProps = {

  resume: Resume;

  onUpdate: (updated: Resume) => void;

};



export default function ResumeForm({ resume, onUpdate }: ResumeFormProps) {
  // Ensure the form starts with empty arrays if the resume data is null/undefined
  const [form, setForm] = useState<Resume>({
    ...resume,
    education: resume.education || [],
    experience: resume.experience || [],
    skills: resume.skills || [],
    projects: resume.projects || [],
    socialLinks: resume.socialLinks || { linkedin: "", github: "" },
  });
  
  const [aiLoading, setAiLoading] = useState(false);

  const handleChange = (field: keyof Resume, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const saveResume = async () => {
    try {
      const res = await axios.put(`/api/resumes/${resume.id}`, form);
      if (res.data.success) onUpdate(res.data.resume);
      alert("Resume saved!");
    } catch (err) {
      console.error(err);
      alert("Failed to save resume");
    }
  };

  const generateSummary = async () => {
    setAiLoading(true);
    try {
      // Added optional chaining ?. to safely map
      const expText = form.experience?.map((e) => `${e.title} at ${e.company}`).join(". ") || "";
      const skillsText = form.skills?.join(", ") || "";
      const text = `${expText}. ${skillsText}`;
      
      const res = await axios.post("/api/ai/summary", { resumeText: text });
      if (res.data.success) handleChange("professionalSummary", res.data.summary);
    } catch (err) {
      console.error(err);
      alert("AI summary generation failed");
    } finally {
      setAiLoading(false);
    }
  };

  // Helpers to add/remove items (using || [] to prevent spreading null)
  const addEducation = () => {
    handleChange("education", [...(form.education || []), { id: uuidv4(), school: "", degree: "", startDate: "", endDate: "" }]);
  };
  const removeEducation = (id: string) => {
    handleChange("education", form.education?.filter((e) => e.id !== id) || []);
  };

  const addExperience = () => {
    handleChange("experience", [...(form.experience || []), { id: uuidv4(), company: "", title: "", startDate: "", endDate: "", description: "" }]);
  };
  const removeExperience = (id: string) => {
    handleChange("experience", form.experience?.filter((e) => e.id !== id) || []);
  };

  const addProject = () => {
    handleChange("projects", [...(form.projects || []), { id: uuidv4(), name: "", link: "", description: "" }]);
  };
  const removeProject = (id: string) => {
    handleChange("projects", form.projects?.filter((p) => p.id !== id) || []);
  };

  return (
    <div className="space-y-6">
      <input
        type="text"
        value={form.title || ""}
        onChange={(e) => handleChange("title", e.target.value)}
        placeholder="Resume Title"
        className="w-full px-4 py-2 rounded-xl"
      />

      {/* Professional Summary */}
      <textarea
        value={form.professionalSummary || ""}
        onChange={(e) => handleChange("professionalSummary", e.target.value)}
        placeholder="Professional Summary"
        className="w-full px-4 py-2 rounded-xl h-32"
      />
      <button
        onClick={generateSummary}
        disabled={aiLoading}
        className="bg-blue-600 px-4 py-2 rounded-xl text-white"
      >
        {aiLoading ? "Generating..." : "Generate AI Summary"}
      </button>

      {/* Education - Added Optional Chaining */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        {form.education?.map((edu, i) => (
          <div key={edu.id} className="flex gap-2 mb-2">
            <input
              placeholder="School"
              value={edu.school}
              onChange={(e) => {
                const newEdu = [...form.education];
                newEdu[i].school = e.target.value;
                handleChange("education", newEdu);
              }}
              className="px-2 py-1 rounded"
            />
            <button onClick={() => removeEducation(edu.id)} className="bg-red-500 px-2 rounded text-white">Remove</button>
          </div>
        ))}
        <button onClick={addEducation} className="bg-green-600 px-4 py-2 rounded text-white">Add Education</button>
      </div>

      {/* Experience - Added Optional Chaining */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        {form.experience?.map((exp, i) => (
          <div key={exp.id} className="flex flex-col gap-2 mb-2 border p-2 rounded">
            <input
              placeholder="Company"
              value={exp.company}
              onChange={(e) => {
                const newExp = [...form.experience];
                newExp[i].company = e.target.value;
                handleChange("experience", newExp);
              }}
              className="px-2 py-1 rounded"
            />
            <button onClick={() => removeExperience(exp.id)} className="bg-red-500 px-2 rounded text-white">Remove</button>
          </div>
        ))}
        <button onClick={addExperience} className="bg-green-600 px-4 py-2 rounded text-white">Add Experience</button>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <input
          type="text"
          value={form.skills?.join(", ") || ""}
          onChange={(e) => handleChange("skills", e.target.value.split(",").map(s => s.trim()))}
          placeholder="Skills (comma separated)"
          className="w-full px-4 py-2 rounded"
        />
      </div>

      {/* Projects - Added Optional Chaining */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        {form.projects?.map((proj, i) => (
          <div key={proj.id} className="flex flex-col gap-2 mb-2 border p-2 rounded">
            <input
              placeholder="Project Name"
              value={proj.name}
              onChange={(e) => {
                const newProj = [...form.projects];
                newProj[i].name = e.target.value;
                handleChange("projects", newProj);
              }}
              className="px-2 py-1 rounded"
            />
            <button onClick={() => removeProject(proj.id)} className="bg-red-500 px-2 rounded text-white">Remove</button>
          </div>
        ))}
        <button onClick={addProject} className="bg-green-600 px-4 py-2 rounded text-white">Add Project</button>
      </div>

      <button onClick={saveResume} className="bg-indigo-600 px-4 py-2 rounded-xl text-white">
        Save All Changes
      </button>
    </div>
  );
}