import { defineConfig } from 'vite'

export default defineConfig({
  base: '/mahveenya-JSFE2024Q4/christmas-shop/',
  build: {
    sourcemap: true,
    outDir: 'dist/christmas-shop',
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
    devSourcemap: true,
  },
})
