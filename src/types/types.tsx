export interface ObjectByKey {
  [key: string]: () => JSX.Element;
}

export interface Information {
  title: string;
  description: string;
  points: string[];
}
