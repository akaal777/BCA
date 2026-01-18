
export interface ResourceItem {
  title: string;
  desc: string;
  link: string;
  tag?: string;
  type?: string;
  author?: string;
}

export interface StudyResources {
  playlists: ResourceItem[];
  oneshots: ResourceItem[];
  resources: ResourceItem[];
  theory: ResourceItem[];
  books: ResourceItem[];
}
