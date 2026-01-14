export interface Milestone {
  year: string;
  month: string;
  title: string;
  role: string;
  description: string;
  point: string;
}

export interface Profile {
  full_name: string;
  avatar_url: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  github_url: string;
  linkedin_url: string;
  location: string;
  updated_at: string;
}

export interface Project {
  title: string;
  description: string;
  image_url: string;
  tech_stack: string[];
  github_url: string;
  demo_url: string;
}
