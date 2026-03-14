// import { NextRequest, NextResponse } from "next/server";
// import { HfInference } from "@huggingface/inference";
// import { getCurrentUser } from "@/lib/server/auth";
// import { log } from "console";

// // Initialize Hugging Face client
// const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

// export async function POST(req: NextRequest) {
//   const token = req.cookies.get("token")?.value;
//   const user = await getCurrentUser(token);
//   if (!user) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });

//   const { resumeText } = await req.json();
//   if (!resumeText) return NextResponse.json({ success: false, message: "resumeText is required" }, { status: 400 });

// try {
//   const response = await hf.chatCompletion({
//     model: "Qwen/Qwen2.5-7B-Instruct",
//     messages: [
//       { role: "system", content: "You are a professional resume writer. Write a 3-sentence summary based on the following text." },
//       { role: "user", content: `Resume text: ${resumeText}` }
//     ],
//     max_tokens: 300,
//   }, {
//     wait_for_model: true 
//   } as any);

//   // 1. Correct the extraction path
//   const summary = response.choices[0].message?.content;

//   log("Hugging Face API response:", response);

//   return NextResponse.json({ success: true, summary });
// } catch (error: any) {
//     console.error("Hugging Face error:", error);
    
//     // Pro Tip: Hugging Face free tier sometimes has "Model is loading" errors
//     const errorMessage = error.message?.includes("loading") 
//       ? "AI model is warming up, please try again in 30 seconds." 
//       : "AI generation failed";

//     return NextResponse.json({ success: false, message: errorMessage }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import { HfInference } from "@huggingface/inference";
import { getCurrentUser } from "@/lib/server/auth";

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export async function POST(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const user = await getCurrentUser(token);

  if (!user) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  const { resumeText } = await req.json();

  if (!resumeText) {
    return NextResponse.json(
      { success: false, message: "resumeText is required" },
      { status: 400 }
    );
  }

  try {
    const response = await hf.chatCompletion(
      {
        model: "Qwen/Qwen2.5-7B-Instruct",
        messages: [
          {
            role: "system",
            content: `
You are an expert ATS-friendly resume writer.

Your task:
Write a PROFESSIONAL RESUME SUMMARY for a resume builder.

STRICT RULES:
- Write ONLY 3 to 4 concise sentences.
- Make it sound strong, modern, and professional.
- Focus on skills, technologies, experience level, strengths, and career direction.
- DO NOT include name.
- DO NOT include email.
- DO NOT include phone number.
- DO NOT include address.
- DO NOT mention "seeking opportunities", "looking for a job", or similar generic phrases.
- DO NOT use bullet points.
- DO NOT use headings.
- DO NOT repeat the same skills too much.
- Output should be directly ready to place inside a resume.
`
          },
          {
            role: "user",
            content: `
Create a professional resume summary from this candidate data:

${resumeText}

Return only the final resume summary paragraph.
`
          }
        ],
        max_tokens: 220,
        temperature: 0.6,
      },
      {
        wait_for_model: true,
      } as any
    );

    let summary = response.choices?.[0]?.message?.content?.trim() || "";

    // Basic cleanup / sanitization
    summary = summary
      .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, "") // remove email
      .replace(/\b(\+?\d[\d\s-]{7,}\d)\b/g, "") // remove phone-like numbers
      .replace(/\s{2,}/g, " ")
      .trim();

    // Optional: remove quotes if model returns quoted text
    summary = summary.replace(/^["']|["']$/g, "").trim();

    if (!summary) {
      return NextResponse.json(
        { success: false, message: "AI returned an empty summary" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      summary,
    });
  } catch (error: any) {
    console.error("Hugging Face error:", error);

    const errorMessage =
      error?.message?.includes("loading")
        ? "AI model is warming up, please try again in 30 seconds."
        : "AI generation failed";

    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}