import { NextResponse } from "next/server";
import  prisma  from "@/lib/prisma";
import { launchBrowser } from "@/lib/pdf-browser";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(request: Request, context: RouteContext) {
  let browser = null;

  try {
    const { id } = await context.params;

    // If Resume.id is String:
    const resume = await prisma.resume.findUnique({
      where: { id },
    });

    // If Resume.id is Int, replace with:
    // const resume = await prisma.resume.findUnique({
    //   where: { id: Number(id) },
    // });

    if (!resume) {
      return NextResponse.json(
        { success: false, message: "Resume not found" },
        { status: 404 }
      );
    }

    const url = new URL(request.url);
    const origin = url.origin;

    const pdfPageUrl = `${origin}/resume/pdf/${id}`;

    browser = await launchBrowser();
    const page = await browser.newPage();

    await page.goto(pdfPageUrl, {
      waitUntil: "networkidle0",
      timeout: 60000,
    });

    await page.evaluateHandle("document.fonts.ready");

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      displayHeaderFooter: false,
      preferCSSPageSize: true,
      margin: {
        top: "0mm",
        right: "0mm",
        bottom: "0mm",
        left: "0mm",
      },
    });

    await page.close();
    await browser.close();
    browser = null;

    const safeTitle =
      resume.title?.replace(/[^\w\s-]/g, "").replace(/\s+/g, "-") || "resume";

    return new NextResponse(pdfBuffer as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${safeTitle}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);

    if (browser) {
      try {
        await browser.close();
      } catch {}
    }

    return NextResponse.json(
      { success: false, message: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}