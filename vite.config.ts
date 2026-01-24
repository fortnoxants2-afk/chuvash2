import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Делает пути относительными, чтобы проект работал из любой папки
  build: {
    minify: 'esbuild', // Используем встроенный быстрый минификатор
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false
  },
  server: {
    port: 3000,
    open: true
  }
})