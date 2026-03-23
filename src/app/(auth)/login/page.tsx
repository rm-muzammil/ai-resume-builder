"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginInput } from "@/lib/validations/auth.schema";
import { toast } from "sonner";
import axios, { AxiosError } from "axios"; // 1. Added AxiosError

interface ApiError {
  message: string;
}

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

const onSubmit = async (data: LoginInput) => {
    try {
      setLoading(true);
      // 3. Type the axios response
      const response = await axios.post<{ message: string }>("/api/auth/login", data);
      
      toast.success(response.data.message || "Login successful");
      router.push("/dashboard");
      router.refresh();
    } catch (error: unknown) { // 4. Changed 'any' to 'unknown'
      // 5. Type-safe error handling
      const axiosError = error as AxiosError<ApiError>;
      const errorMessage = axiosError.response?.data?.message || "Something went wrong during login";
      
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-md">
        <h1 className="mb-2 text-3xl font-bold">Welcome back</h1>
        <p className="mb-6 text-sm text-muted-foreground">
          Login to continue building your resume.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="input"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              className="input"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-destructive">{errors.password.message}</p>
            )}
          </div>

          <button type="submit" disabled={loading} className="btn w-full">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don’t have an account?{" "}
          <Link href="/signup" className="font-medium underline">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}