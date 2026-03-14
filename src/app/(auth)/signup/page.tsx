"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupInput } from "@/lib/validations/auth.schema";
import { toast } from "sonner";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignupInput) => {
    try {
      setLoading(true);

      const response = await axios.post("/api/auth/signup", data);

      toast.success(response.data.message || "Account created successfully");
      router.push("/dashboard");
      router.refresh();
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Something went wrong during signup";

      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <h1 className="mb-2 text-3xl font-bold">Create your account</h1>
        <p className="mb-6 text-sm text-slate-400">
          Start building professional AI-powered resumes.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              {...register("fullName")}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none ring-0 transition focus:border-slate-500"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-400">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none ring-0 transition focus:border-slate-500"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none ring-0 transition focus:border-slate-500"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-400">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-white px-4 py-3 font-semibold text-slate-900 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-white hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}