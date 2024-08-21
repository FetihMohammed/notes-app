import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'repository-name' with the actual name of your repository
const base = '/notes-app'

export default defineConfig({
  plugins: [react()],
  base: base,
  build: {
    outDir: 'dist', // Default output directory, you can change if needed
  }
})
