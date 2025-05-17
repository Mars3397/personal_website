// Content Types
export interface ContentItem {
  id: string;
  title: string;
  category: 'experiences' | 'projects' | 'articles';
  slug: string;
  summary: string;
  date: string;
  tags?: string[];
  coverImage?: string;
}

// Import all MD files at build time
const experiencesMD = import.meta.glob('../markdowns/experiences/*.md', { eager: true });
const projectsMD = import.meta.glob('../markdowns/projects/*.md', { eager: true });
const articlesMD = import.meta.glob('../markdowns/articles/*.md', { eager: true });

// Import all images at build time
export const contentImages = import.meta.glob('../images/**/*.{png,jpg,jpeg,svg}', { eager: true });

// Helper function to convert file path to slug
const pathToSlug = (path: string): string => {
  const filename = path.split('/').pop() || '';
  return filename.replace('.md', '');
};

// Experience content items
export const experiences: ContentItem[] = Object.entries(experiencesMD).map(([path, module]) => {
  const slug = pathToSlug(path);
  return {
    id: `exp-${slug}`,
    title: slug.replace(/([A-Z])/g, ' $1').trim(), // Convert camelCase to spaces
    category: 'experiences',
    slug,
    summary: `Experience at ${slug}`,
    date: '2023-01-01', // You can replace this with actual dates
    tags: ['experience', slug],
    coverImage: module.default // Vite builds the URL for us
  };
});

// Project content items
export const projects: ContentItem[] = Object.entries(projectsMD).map(([path, module]) => {
  const slug = pathToSlug(path);
  return {
    id: `proj-${slug}`,
    title: slug.replace(/([A-Z])/g, ' $1').trim(),
    category: 'projects',
    slug,
    summary: `Project: ${slug}`,
    date: '2023-01-01',
    tags: ['project', slug],
    coverImage: module.default
  };
});

// Article content items
export const articles: ContentItem[] = Object.entries(articlesMD).map(([path, module]) => {
  const slug = pathToSlug(path);
  return {
    id: `art-${slug}`,
    title: slug.replace(/([A-Z])/g, ' $1').trim(),
    category: 'articles',
    slug,
    summary: `Article about ${slug}`,
    date: '2023-01-01',
    tags: ['article', slug],
    coverImage: module.default
  };
});

// All content combined
export const allContent: ContentItem[] = [
  ...experiences,
  ...projects,
  ...articles
];

// Function to get content by category
export const getContentByCategory = (category: string): ContentItem[] => {
  return allContent.filter(item => item.category === category);
};

// Function to get content by slug
export const getContentBySlug = (category: string, slug: string): ContentItem | undefined => {
  return allContent.find(item => item.category === category && item.slug === slug);
};

// Function to get markdown content
export const getMarkdownContent = async (category: string, slug: string): Promise<string> => {
  try {
    const module = await import(`../markdowns/${category}/${slug}.md`);
    const response = await fetch(module.default);
    if (!response.ok) {
      throw new Error(`Failed to load markdown: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading markdown:', error);
    return `# Error\nFailed to load content for ${slug}.`;
  }
};

// Function to resolve image paths in markdown content
export const resolveImagePaths = (content: string): string => {
  return content.replace(/!\[([^\]]*)\]\((static\/images\/[^)]+)\)/g, (match, alt, src) => {
    const imagePath = `../${src}`;
    const image = contentImages[imagePath] as any;
    
    if (image && image.default) {
      return `<img src="${image.default}" alt="${alt}">`;
    }
    
    console.warn(`Image not found: ${imagePath}`);
    return match;
  });
}; 