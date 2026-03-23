// src/types/resume.ts

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone?: string;
  address?: string;
  jobTitle?: string;
  website?: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate?: string; // Empty string or null if "Present"
  description?: string;
}

export interface Project {
  id: string;
  name: string;
  description?: string;
  link?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string;
}

export interface Language {
  id: string;
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Native";
}

export interface SocialLink {
  id: string;
  platform: string;

  url: string;
}

export interface CustomSection {
  id: string;
  title: string;
  content: string;
}

export interface Resume {
  id: string;
  userId: string;
  title: string;
  slug: string;
  templateKey: string;
  personalInfo: PersonalInfo; // No longer any
  professionalSummary?: string;
  skills: string[];
  education: Education[]; // No longer any[]
  experience: Experience[]; // No longer any[]
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
  socialLinks: SocialLink[];
  customSections: CustomSection[];
  createdAt: Date;
  updatedAt: Date;
}

// Use this for Prisma queries that include related tables
export type ResumeWithRelations = Resume;