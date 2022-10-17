export interface ObjectByKey {
  [key: string]: () => JSX.Element;
}

export interface Information {
  title: string;
  description: string;
  points: string[];
}

export interface ProjectInfo {
  name: string;
  imagePath: string;
  description: string;
  points: string[];
  technologies: string;
  githubUrl?: string;
  webpageUrl?: string;
}
