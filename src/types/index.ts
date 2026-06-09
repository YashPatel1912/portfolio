export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  live?: string;
  image?: string;
  duration: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  percentage?: string;
  achievements?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'award' | 'hackathon' | 'achievement';
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  issueDate: string;
  credentialId?: string;
  certificateUrl?: string;
  icon?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
