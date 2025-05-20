import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
    base: '/device-map/',
      build: {
    outDir: 'dist', 
    rollupOptions: {
      input: './src/main.tsx', 
    },
  },
})
