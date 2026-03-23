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
      <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
        Loading dashboard...
      </main>
    );
  }

  return (
    <main className="bg-background px-6 py-10 text-foreground">
      
      <div className="mx-auto max-w-5xl">
        {/* User Info & Logout */}
        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Logged in as</p>
            <h1 className="text-2xl font-bold">{user?.fullName}</h1>
            <p className="text-muted-foreground">{user?.email}</p>
          </div>

          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="rounded-xl bg-primary text-primary-foreground px-5 py-3 font-medium transition hover:opacity-90 disabled:opacity-60"
            >
            {loggingOut ? "Logging out..." : "Logout"}
          </button>
        </div>

        {/* Dashboard Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <div
            className="rounded-2xl border border-border bg-card p-6 cursor-pointer transition hover:shadow-md"
            onClick={() => router.push("/builder")}
          >
            <h2 className="mb-2 text-lg font-semibold">Resume Builder</h2>
            <p className="text-sm text-muted-foreground">
              Create and manage resume versions.
            </p>
          </div>

          <div className="rounded-2xl border border-border cursor-pointer bg-card p-6"
          onClick={() => router.push("/ai-summary")}>
            <h2 className="mb-2 text-lg font-semibold">AI Summary</h2>
            <p className="text-sm text-muted-foreground">
              Generate professional summaries with AI.
            </p>
          </div>

          {/* <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="mb-2 text-lg font-semibold">Export</h2>
            <p className="text-sm text-muted-foreground">
              Download ATS-friendly resume PDFs later.
            </p>
          </div> */}
        </div>
      </div>
    </main>

  );
}