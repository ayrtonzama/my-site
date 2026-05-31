import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: set `base` to '/<your-repo-name>/' for a project site,
// e.g. base: '/portfolio/'. If you deploy to <username>.github.io
// (a user site) instead, set base: '/'.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
