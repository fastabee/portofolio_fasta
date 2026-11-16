export type Language = 'id' | 'en';

export interface Project {
  id: string;
  title: string;
  tagline: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  architecture?: {
    id: string;
    en: string;
  };
  category: 'Full-Stack' | 'Backend & Cloud' | 'Systems & DevOps' | 'AI & Tools';
  tags: string[];
  metrics: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  image?: string;
  keyFeatures: {
    id: string[];
    en: string[];
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: string;
  description: {
    id: string;
    en: string;
  };
  achievements: {
    id: string[];
    en: string[];
  };
  techStack: string[];
}

export interface Education {
  id: string;
  major: string;
  institution: string;
  period: string;
  location?: string;
  description?: {
    id: string;
    en: string;
  };
}

export interface SkillItem {
  name: string;
  level: number; // 1-100
  experience: string;
  highlight?: string;
}

export interface SkillCategory {
  title: {
    id: string;
    en: string;
  };
  iconName: string;
  skills: SkillItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: {
    id: string;
    en: string;
  };
  avatar: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  badge?: string;
}

export interface PersonalInfo {
  name: string;
  handle: string;
  title: string;
  roles: string[];
  status: {
    id: string;
    en: string;
  };
  location: string;
  email: string;
  phone?: string;
  bio: {
    id: string;
    en: string;
  };
  philosophies: Array<{
    title: { id: string; en: string };
    desc: { id: string; en: string };
    icon: string;
  }>;
  stats: Array<{
    label: { id: string; en: string };
    value: string;
    sublabel: { id: string; en: string };
  }>;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    email: string;
    phone?: string;
    whatsapp?: string;
    resume: string;
  };
}
