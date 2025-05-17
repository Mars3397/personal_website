import { ContentMeta, ContentRegistry, GetContentByCategory, GetContentBySlug } from './types';

// Import all experiences metadata
import * as blockchainSecurity from './experiences/BlockchainSecurity/meta';
import * as pchome from './experiences/PChome/meta';
import * as lineFresh from './experiences/LineFresh/meta';

// Import all projects metadata (to be added later)
// import * as personalWebsite from './projects/PersonalWebsite/meta';

// Import all articles metadata (to be added later)
// import * as article1 from './articles/Article1/meta';

// Collect all content metadata
const experiences: ContentMeta[] = [
  blockchainSecurity.meta,
  pchome.meta,
  lineFresh.meta,
];

const projects: ContentMeta[] = [
  // personalWebsite.meta,
];

const articles: ContentMeta[] = [
  // article1.meta,
];

// Create the content registry
export const contentRegistry: ContentRegistry = {
  experiences,
  projects,
  articles,
};

// Function to get all content flattened
export const getAllContent = (): ContentMeta[] => {
  return [
    ...experiences,
    ...projects,
    ...articles,
  ];
};

// Function to get content by category
export const getContentByCategory: GetContentByCategory = (category) => {
  if (category === 'experiences') return experiences;
  if (category === 'projects') return projects;
  if (category === 'articles') return articles;
  return [];
};

// Function to get content by slug
export const getContentBySlug: GetContentBySlug = (category, slug) => {
  const categoryContent = getContentByCategory(category);
  return categoryContent.find(item => item.slug === slug);
}; 