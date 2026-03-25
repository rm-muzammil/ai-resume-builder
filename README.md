# AI Resume Builder

A modern **AI-powered Resume Builder** built with **Next.js 16**, **TypeScript**, **Prisma**, and **PostgreSQL**.  
Users can create, edit, manage, and export professional resumes with **AI-generated summaries** and **PDF download support**.

---

## 🚀 Features

- 🔐 **Custom JWT Authentication**
  - User signup
  - User login/logout
  - Session check via API
- 📝 **Resume Builder**
  - Create professional resumes
  - Edit existing resumes
  - Save and manage multiple resumes
- 🤖 **AI Summary Generator**
  - Generate professional resume summaries using AI
- 📄 **PDF Export**
  - Download resume as a PDF using `puppeteer-core` + `@sparticuz/chromium-min`
- 📊 **Dashboard**
  - View and manage saved resumes
- ⚡ **Modern App Router Architecture**
  - Built with Next.js 16 App Router
- 🗄️ **Database Integration**
  - Prisma ORM + PostgreSQL

---

## 🛠️ Tech Stack

### Frontend
- Next.js 16 (App Router)
- TypeScript
- React
- Tailwind CSS

### Backend / APIs
- Next.js Route Handlers
- JWT Authentication
- Prisma ORM
- PostgreSQL

### AI / Utilities
- OpenAI API (or compatible AI provider)
- Puppeteer Core
- @sparticuz/chromium-min

---

## 📂 Project Structure

```bash
src/
├── app/                  # App Router pages and API routes
├── components/           # Reusable UI components
├── generated/            # Prisma generated client
├── lib/                  # Utilities, auth helpers, DB config
└── types/                # TypeScript types

prisma/
├── schema.prisma         # Prisma schema


📦 Installation

git clone https://github.com/your-username/ai-resume-builder.git
cd ai-resume-builder
npm install


🧬 Prisma Setup

Generate Prisma client:

npx prisma generate

Run migrations:

npx prisma migrate dev


▶️ Run Locally

Start development server:

npm run dev

Open:

http://localhost:3000


🏗️ Production Build

Build the project:

npm run build

Start production server locally:

npm run start


🚀 Deploy on Vercel

Push the project to GitHub
Import the repository into Vercel
Add environment variables in Project Settings → Environment Variables
Deploy
Required Vercel Environment Variables
DATABASE_URL
JWT_SECRET
OPENAI_API_KEY
NEXT_PUBLIC_APP_URL
📄 PDF Export Notes

This project uses:

puppeteer-core
@sparticuz/chromium-min

For Vercel serverless compatibility, Chromium binaries are included via next.config.ts with outputFileTracingIncludes.