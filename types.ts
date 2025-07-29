
export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveDemo?: string;
  github: string;
  image: string;
  highlight: string;
}

export interface BlogPost {
  title: string;
  summary: string;
  link: string;
}

export interface Skill {
  name: string;
}
