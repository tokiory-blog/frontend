export interface ChecklistItem {
  url?: string;
  name: string;
  description: string;
  done: boolean;
}

export interface ChecklistSection {
  name: string;
  child: ChecklistItem[];
}