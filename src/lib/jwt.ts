import { SignJWT, jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "super-secret-dev-key"
);

if (!process.env.JWT_SECRET) {
  console.warn("⚠️ JWT_SECRET is not set. Using fallback secret for development.");
}

export type JwtPayload = {
  userId: string;
  email: string;
  role: "USER" | "ADMIN";
};

// Use SignJWT for Edge compatibility
export async function signToken(payload: JwtPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(JWT_SECRET);
}

// Use jwtVerify for Edge compatibility
export async function verifyToken(token: string): Promise<JwtPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as unknown as JwtPayload;
  } catch (error) {
    console.error("JWT verification failed:", error);
    return null;
  }
}