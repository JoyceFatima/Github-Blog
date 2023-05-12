import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Github-Blog',
  plugins: [react()],
  resolve: {
    alias: {
      '@types': '/src/@types',
    },
  },
})
