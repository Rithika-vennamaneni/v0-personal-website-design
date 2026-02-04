export interface PersonalInfo {
  name: string;
  pronouns: string;
  location: string;
  title: string;
  tagline: string;
  summary: string;
  bio: string;
  education: {
    current: {
      degree: string;
      institution: string;
      dates: string;
      gpa: string;
    };
    undergraduate: {
      degree: string;
      institution: string;
      dates: string;
    };
  };
  currentRoles: Array<{
    title: string;
    organization: string;
    dates: string;
  }>;
  achievements: string[];
  contact: {
    email: string;
    linkedin: string;
    location: string;
  };
  availability: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  dates: string;
  type: 'Current' | 'Research' | 'Volunteer' | 'Internship';
  description: string;
  achievements: string[];
  tools: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  when: string;
  summary: string;
  problem: string;
  approach: string;
  tools: string[];
  impact: string;
  tags: string[];
  coverImage: string;
  links: {
    repo: string;
    demo: string;
    report: string;
  };
  gallery: string[];
  caseStudy?: {
    problem: string;
    whatIBuilt: string[];
    uxDecisions: string[];
    systemDesign: {
      nodes: string[];
      note?: string;
    };
    techStack: string[];
    outcomes: string[];
  };
}

export interface Skill {
  name: string;
  level: 'Basic' | 'Intermediate' | 'Advanced';
  details: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: Skill[];
}

export interface SkillsData {
  categories: SkillCategory[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}
