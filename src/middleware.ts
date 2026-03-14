import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

// 1. Added 'async' here
export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("token")?.value;

  const protectedRoutes = ["/dashboard", "/builder"];
  const authRoutes = ["/login", "/signup"];

  const isProtectedRoute = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );
  const isAuthRoute = authRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  // 2. Added 'await' here. This is crucial!
  const payload = token ? await verifyToken(token) : null;

  // Redirect unauthenticated users from protected routes
  if (isProtectedRoute && !payload) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Redirect logged-in users away from login/signup
  if (isAuthRoute && payload) {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/builder/:path*", "/login", "/signup"],
};