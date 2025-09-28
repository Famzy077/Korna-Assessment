export interface Author {
  name: string;
  image: string;
  role?: string;
  verified?: boolean;
}

export interface Article {
  author: Author;
  title: string;
  preview: string;
  image: string;
  readTime: string;
  date: string;
  engagement?: {
    likes?: number;
    comments?: number;
    bookmarks?: number;
  };
  isStaffPick?: boolean;
  subtitle?: string;
}
export interface StaffPicks {
  author: Author;
  title: string;
  preview: string;
  date: string;
  engagement?: {
    likes?: number;
    comments?: number;
    bookmarks?: number;
  };
  isStaffPick?: boolean;
  subtitle?: string;
}

export interface Topic {
  name: string;
  category: 'recommended' | 'featured' | 'trending';
}