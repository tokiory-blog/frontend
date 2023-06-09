export interface LinkSectionItem {
  name: string;
  url: string;
  description?: string;
}

export interface TechnologyItem extends LinkSectionItem {
  icon: string;
}

interface Section<T> {
  name: string;
  child: T[];
}

export type LinkSection = Section<LinkSectionItem>;
export type TechnologySection = Section<TechnologyItem>;
