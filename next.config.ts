import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@sparticuz/chromium-min", "puppeteer-core"],
  outputFileTracingIncludes: {
    "/api/resume/[id]/pdf": ["node_modules/@sparticuz/chromium-min/bin/**"],
    "/api/resume/[id]/pdf/route": ["node_modules/@sparticuz/chromium-min/bin/**"],
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
