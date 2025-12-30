
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  architectureDetails: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface YouTubeVideo {
  title: string;
  url: string;
  thumbnail: string;
}
