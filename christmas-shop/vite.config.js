import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
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
