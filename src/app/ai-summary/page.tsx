"use client";

import { useState } from "react";
import axios from "axios";
import { Sparkles, Loader2, Copy, Wand2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { toast } from "sonner";

export default function AISummaryPage() {
  const [jobTitle, setJobTitle] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [industry, setIndustry] = useState("");
  const [tone, setTone] = useState("professional");
  const [extraDetails, setExtraDetails] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!jobTitle.trim()) {
      toast.error("Please enter your job title");
      return;
    }

    try {
      setLoading(true);

      const resumeText = JSON.stringify({
        jobTitle,
        yearsOfExperience,
        skills,
        education,
        industry,
        tone,
        extraDetails,
      });

      const res = await axios.post("/api/ai/summary", {
        resumeText,
      });

      if (res.data.success) {
        setSummary(res.data.summary);
        toast.success("AI summary generated successfully");
      } else {
        toast.error(res.data.message || "Failed to generate summary");
      }
    } catch (error: unknown) {
      console.error(error);

  // 1. Create a default message
  let errorMessage = "Something went wrong while generating summary";

  // 2. Check if it's a valid Axios error
  if (axios.isAxiosError(error)) {
    // 3. Now TypeScript knows 'error' has a response, data, and message
    errorMessage = error.response?.data?.message || error.message || errorMessage;
  } else if (error instanceof Error) {
    // 4. Handle standard JS errors
    errorMessage = error.message;
  }

  toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!summary) return;

    try {
      await navigator.clipboard.writeText(summary);
      toast.success("Summary copied to clipboard");
    } catch {
      toast.error("Failed to copy summary");
    }
  };

  return (

    <main className="min-h-screen bg-background text-foreground px-4 py-10">

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4" />
            AI Resume Summary Generator
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Generate a Professional AI Summary in Seconds
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-sm md:text-base">
            Don’t want to build a full resume right now? No problem. Just enter
            your professional details and let AI create a polished, ATS-friendly
            professional summary for you.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* LEFT: Form */}
          <Card className="rounded-2xl border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="h-5 w-5" />
                Enter Your Details
              </CardTitle>
              <CardDescription>
                Fill in a few details and generate your AI-powered professional summary.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">Job Title *</label>
                <Input
                  placeholder="e.g. Frontend Developer"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Years of Experience</label>
                <Input
                  placeholder="e.g. 2 years"
                  value={yearsOfExperience}
                  onChange={(e) => setYearsOfExperience(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Skills</label>
                <Textarea
                  placeholder="e.g. React, Next.js, TypeScript, Tailwind CSS, Node.js"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Education</label>
                <Input
                  placeholder="e.g. BS Software Engineering"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Industry / Domain</label>
                <Input
                  placeholder="e.g. Web Development, FinTech, SaaS"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Preferred Tone</label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                >
                  <option value="professional">Professional</option>
                  <option value="confident">Confident</option>
                  <option value="modern">Modern</option>
                  <option value="executive">Executive</option>
                  <option value="concise">Concise</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Extra Details (Optional)</label>
                <Textarea
                  placeholder="Add achievements, career goals, projects, certifications, or anything else..."
                  value={extraDetails}
                  onChange={(e) => setExtraDetails(e.target.value)}
                  className="min-h-[120px]"
                />
              </div>

              <Button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Summary...
                  </>
                ) : (
                    <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate AI Summary
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* RIGHT: Output */}
          <Card className="rounded-2xl border-border">
            <CardHeader>
              <CardTitle>Generated Summary</CardTitle>
              <CardDescription>
                Your AI-generated professional summary will appear here.
              </CardDescription>
            </CardHeader>

            <CardContent>
              {summary ? (
                  <div className="space-y-4">
                  <div className="rounded-xl border border-border bg-muted/40 p-4">
                    <p className="whitespace-pre-line text-sm leading-7 text-foreground">
                      {summary}
                    </p>
                  </div>

                  <Button onClick={handleCopy} variant="outline" className="w-full">
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Summary
                  </Button>
                </div>
              ) : (
                  <div className="flex min-h-[400px] items-center justify-center rounded-xl border border-dashed border-border bg-muted/20 p-6 text-center">
                  <div>
                    <Sparkles className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
                    <p className="font-medium">No summary generated yet</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Fill in your details and click “Generate AI Summary”.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
                 
  );
}