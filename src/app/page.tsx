import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 rounded-full border border-slate-700 bg-slate-900 px-4 py-1 text-sm text-slate-300">
          AI Resume Builder MVP
        </span>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
          Build professional, ATS-friendly resumes with AI
        </h1>

        <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
          Create resumes, improve experience bullets, generate summaries, and
          export beautiful resume templates — all in one place.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/signup"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:opacity-90"
          >
            Get Started
          </Link>

          <Link
            href="/login"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-900"
          >
            Login
          </Link>
        </div>
      </section>
    </main>
  );
}