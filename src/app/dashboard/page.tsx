"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import type { User } from "@/types/user.d.ts";



export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await axios.get("/api/auth/me");
        setUser(response.data.user);
      } catch {
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchMe();
  }, [router]);

  const handleLogout = async () => {
    try {
      setLoggingOut(true);
      await axios.post("/api/auth/logout");
      router.push("/login");
      router.refresh();
    } finally {
      setLoggingOut(false);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Loading dashboard...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-slate-400">Logged in as</p>
            <h1 className="text-2xl font-bold">{user?.fullName}</h1>
            <p className="text-slate-300">{user?.email}</p>
          </div>

          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="rounded-xl bg-white px-5 py-3 font-medium text-slate-900 transition hover:bg-slate-200 disabled:opacity-60"
          >
            {loggingOut ? "Logging out..." : "Logout"}
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6" onClick={() => router.push("/builder")}>
            <h2 className="mb-2 text-lg font-semibold">Resume Builder</h2>
            <p className="text-sm text-slate-400">
              Create and manage resume versions.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-2 text-lg font-semibold">AI Summary</h2>
            <p className="text-sm text-slate-400">
              Generate professional summaries with AI.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-2 text-lg font-semibold">Export</h2>
            <p className="text-sm text-slate-400">
              Download ATS-friendly resume PDFs later.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}