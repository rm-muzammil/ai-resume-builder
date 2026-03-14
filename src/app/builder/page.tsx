"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Resume = {
  id: string;
  title: string;
  slug: string;
  templateKey: string;
  createdAt: string;
  updatedAt: string;
};

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
        const res = await axios.get("/api/resumes");
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
      const res = await axios.post("/api/resumes", { title: newTitle });
      if (res.data.success) {
        setResumes([res.data.resume, ...resumes]);
        setNewTitle("");
        // Navigate to builder page for new resume
        router.push(`/builder/${res.data.resume.id}`);
      } else {
        alert(res.data.message || "Failed to create resume");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to create resume");
    }
  };

  if (loading) return <div className="p-6 text-white">Loading...</div>;
  if (error) return <div className="p-6 text-red-400">{error}</div>;

  return (
    <main className="min-h-screen p-6 mx-auto">
      <h1 className="text-3xl font-bold mb-6">Resume Builder</h1>

      <div className="mb-6 flex gap-2">
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="New Resume Title"
          className="px-4 py-2 rounded-xl flex-1 text-black"
        />
        <button
          onClick={createResume}
          className="bg-white text-slate-900 px-4 py-2 rounded-xl"
        >
          Create
        </button>
      </div>

      {resumes.length === 0 ? (
        <p>No resumes yet. Create your first resume above!</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resumes.map((r) => (
            <Link
              key={r.id}
              href={`/builder/${r.id}`}
              className="block rounded-xl border border-slate-700 p-4 hover:border-blue-500 transition"
            >
              <h2 className="text-xl font-semibold">{r.title}</h2>
              <p className="text-sm text-slate-400">Template: {r.templateKey}</p>
              <p className="text-sm text-slate-500">
                Created: {new Date(r.createdAt).toLocaleDateString()}
              </p>
              <p className="text-sm text-slate-500">
                Updated: {new Date(r.updatedAt).toLocaleDateString()}
              </p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}