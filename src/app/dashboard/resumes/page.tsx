"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { Resume } from "@/types/resume";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ResumesPage() {
      const [resumes, setResumes] = useState<Resume[]>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");
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
  return (
    <section className="min-h-screen bg-background text-foreground px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Resumes</h1>
            <p className="text-muted-foreground mt-1">
              Manage, edit, and print your saved resumes.
            </p>
          </div>

          <Link href="/builder">
            <Button>Create Resume</Button>
          </Link>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">

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
      </div>
    </section>
  );
}