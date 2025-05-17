// Define the types for our content
export interface ContentMeta {
  id: string;
  title: string;
  category: 'experiences' | 'projects' | 'articles';
  slug: string;
  summary: string;
  date: string;
  role?: string;
  location?: string;
  period?: string;
  coverImage?: string;
  technologies?: string[];
  tags?: string[];
}

// Registry of all content by category
export interface ContentRegistry {
  experiences: ContentMeta[];
  projects: ContentMeta[];
  articles: ContentMeta[];
}

// Function type for getting all content
export type GetAllContent = () => ContentRegistry;

// Function type for getting content by category
export type GetContentByCategory = (category: string) => ContentMeta[];

// Function type for getting content by slug
export type GetContentBySlug = (category: string, slug: string) => ContentMeta | undefined; 