-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "ResumeStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "AIGenerationType" AS ENUM ('SUMMARY', 'EXPERIENCE_BULLET', 'COVER_LETTER', 'SKILL_SUGGESTION', 'JOB_MATCH', 'ATS_FEEDBACK');

-- CreateEnum
CREATE TYPE "ExportFormat" AS ENUM ('PDF', 'DOCX');

-- CreateEnum
CREATE TYPE "ExportStatus" AS ENUM ('SUCCESS', 'FAILED');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "full_name" VARCHAR(120) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "avatar_url" TEXT,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "last_login_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resumes" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "slug" VARCHAR(180) NOT NULL,
    "template_key" VARCHAR(50) NOT NULL DEFAULT 'modern',
    "status" "ResumeStatus" NOT NULL DEFAULT 'DRAFT',
    "personal_info" JSONB NOT NULL,
    "professional_summary" TEXT,
    "education" JSONB NOT NULL,
    "experience" JSONB NOT NULL,
    "skills" JSONB NOT NULL,
    "projects" JSONB,
    "certifications" JSONB,
    "languages" JSONB,
    "social_links" JSONB,
    "theme_settings" JSONB,
    "is_primary" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "resumes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resume_versions" (
    "id" UUID NOT NULL,
    "resume_id" UUID NOT NULL,
    "version_number" INTEGER NOT NULL,
    "snapshot" JSONB NOT NULL,
    "change_note" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "resume_versions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ai_generations" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "resume_id" UUID,
    "generation_type" "AIGenerationType" NOT NULL,
    "input_prompt" TEXT NOT NULL,
    "input_context" JSONB,
    "output_text" TEXT NOT NULL,
    "model_name" VARCHAR(100) DEFAULT 'mock',
    "tokens_used" INTEGER,
    "is_saved_to_resume" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ai_generations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exports" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "resume_id" UUID NOT NULL,
    "format" "ExportFormat" NOT NULL DEFAULT 'PDF',
    "status" "ExportStatus" NOT NULL DEFAULT 'SUCCESS',
    "file_url" TEXT,
    "error_message" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "exports_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_created_at_idx" ON "users"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "resumes_slug_key" ON "resumes"("slug");

-- CreateIndex
CREATE INDEX "resumes_user_id_idx" ON "resumes"("user_id");

-- CreateIndex
CREATE INDEX "resumes_status_idx" ON "resumes"("status");

-- CreateIndex
CREATE INDEX "resumes_created_at_idx" ON "resumes"("created_at");

-- CreateIndex
CREATE INDEX "resumes_user_id_updated_at_idx" ON "resumes"("user_id", "updated_at");

-- CreateIndex
CREATE INDEX "resume_versions_resume_id_idx" ON "resume_versions"("resume_id");

-- CreateIndex
CREATE INDEX "resume_versions_created_at_idx" ON "resume_versions"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "resume_versions_resume_id_version_number_key" ON "resume_versions"("resume_id", "version_number");

-- CreateIndex
CREATE INDEX "ai_generations_user_id_idx" ON "ai_generations"("user_id");

-- CreateIndex
CREATE INDEX "ai_generations_resume_id_idx" ON "ai_generations"("resume_id");

-- CreateIndex
CREATE INDEX "ai_generations_generation_type_idx" ON "ai_generations"("generation_type");

-- CreateIndex
CREATE INDEX "ai_generations_created_at_idx" ON "ai_generations"("created_at");

-- CreateIndex
CREATE INDEX "exports_user_id_idx" ON "exports"("user_id");

-- CreateIndex
CREATE INDEX "exports_resume_id_idx" ON "exports"("resume_id");

-- CreateIndex
CREATE INDEX "exports_format_idx" ON "exports"("format");

-- CreateIndex
CREATE INDEX "exports_created_at_idx" ON "exports"("created_at");

-- AddForeignKey
ALTER TABLE "resumes" ADD CONSTRAINT "resumes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resume_versions" ADD CONSTRAINT "resume_versions_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resumes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_generations" ADD CONSTRAINT "ai_generations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_generations" ADD CONSTRAINT "ai_generations_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resumes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exports" ADD CONSTRAINT "exports_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exports" ADD CONSTRAINT "exports_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resumes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
