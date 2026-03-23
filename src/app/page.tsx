import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-block rounded-full border border-border bg-muted px-4 py-1 text-sm text-muted-foreground">
          AI Resume Builder MVP
        </span>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
          Build professional, ATS-friendly resumes with AI
        </h1>

        <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Create resumes, improve experience bullets, generate summaries, and
          export beautiful resume templates — all in one place.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/signup"
            className="rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Get Started
          </Link>

          <Link
            href="/login"
            className="rounded-xl border border-border px-6 py-3 font-semibold text-foreground transition hover:bg-muted"
          >
            Login
          </Link>
        </div>
      </section>
    </main>
  );
}