"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

import { Resume } from "@/types/resume"

export default function BuilderPage() {
  const router = useRouter();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newTitle, setNewTitle] = useState("");

  // Fetch resumes
  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const res = await axios.get("/api/resume");
        if (res.data.success) {
          setResumes(res.data.resumes);
        } else {
          setError(res.data.message || "Unauthorized");
        }
      } catch (err) {
        console.error("Failed to fetch resumes", err);
        setError("Failed to fetch resumes");
      } finally {
        setLoading(false);
      }
    };
    fetchResumes();
  }, []);

  // Create new resume
  const createResume = async () => {
    if (!newTitle.trim()) return;
    try {
      const res = await axios.post("/api/resume", { title: newTitle });
      if (res.data.success) {
        setResumes([res.data.resume, ...resumes]);
        setNewTitle("");
        router.push(`/builder/${res.data.resume.id}`);
      } else {
        alert(res.data.message || "Failed to create resume");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to create resume");
    }
  };

  if (loading) return <div className="p-6 text-center text-foreground">Loading...</div>;
  if (error) return <div className="p-6 text-center text-destructive">{error}</div>;

  return (
    <main className="min-h-screen p-6 mx-auto max-w-7xl bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6">Resume Builder</h1>

      {/* New Resume Form */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <Input
          placeholder="New Resume Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="flex-1"
        />
        <Button onClick={createResume} variant="default">
          Create
        </Button>
      </div>

      {/* Resume List */}
      {resumes.length === 0 ? (
        <p className="text-center text-muted-foreground">
          No resumes yet. Create your first resume above!
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((r) => (
            <Link key={r.id} href={`/builder/${r.id}`} className="group">
              <Card className="hover:border-primary transition border-border">
                <CardHeader>
                  <CardTitle>{r.title}</CardTitle>
                  <CardDescription>Template: {r.templateKey}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-1">
                  <p>Created: {new Date(r.createdAt).toLocaleDateString()}</p>
                  <p>Updated: {new Date(r.updatedAt).toLocaleDateString()}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}