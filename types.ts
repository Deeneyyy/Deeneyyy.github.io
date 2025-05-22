
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
}

export interface Skill {
  id: string;
  name: string;
  icon: React.ReactNode; // For SVG icons
  level?: number; // Optional: 0-100 for progress bar
}

export interface NavLink {
  href: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
