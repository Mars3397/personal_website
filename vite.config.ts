import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      'src': path.resolve(__dirname, 'src'),
      'components': path.resolve(__dirname, 'src/components'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'static': path.resolve(__dirname, 'src/static'),
    }
  },
  // Handle static assets
  assetsInclude: ['**/*.md', '**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.svg'],
  build: {
    outDir: 'build', // Same as CRA
  },
  server: {
    port: 3000,
    open: true,
  },
})
