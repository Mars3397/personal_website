/// <reference types="vite/client" />

// Declare module for markdown files
declare module '*.md' {
  const content: string;
  export default content;
}

// Enhance ImportMeta interface for Vite
interface ImportMeta {
  glob: <T = any>(
    pattern: string,
    options?: {
      eager?: boolean;
      as?: string;
      import?: string;
    }
  ) => Record<string, T>;
} 