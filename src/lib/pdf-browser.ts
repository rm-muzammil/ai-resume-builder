import chromium from "@sparticuz/chromium-min";
import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";

export async function launchBrowser() {
  const isProd = process.env.NODE_ENV === "production";

  if (isProd) {
    let executablePath = "";

    try {
      const binPath = path.join(
        process.cwd(),
        "node_modules",
        "@sparticuz",
        "chromium-min",
        "bin"
      );

      if (fs.existsSync(binPath)) {
        executablePath = await chromium.executablePath(binPath);
      } else {
        executablePath = await chromium.executablePath();
      }
    } catch {
      executablePath = await chromium.executablePath();
    }

    return puppeteer.launch({
      executablePath,
      headless: true,
      args: chromium.args,
      defaultViewport: {
        width: 794,
        height: 1123,
        deviceScaleFactor: 2,
      },
    });
  }

  const localExecutablePath = process.env.CHROME_EXECUTABLE_PATH;

  if (!localExecutablePath) {
    throw new Error(
      "CHROME_EXECUTABLE_PATH is missing in .env.local for local development."
    );
  }

  return puppeteer.launch({
    executablePath: localExecutablePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: {
      width: 794,
      height: 1123,
      deviceScaleFactor: 2,
    },
  });
}