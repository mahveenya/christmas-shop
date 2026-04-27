import { defineConfig } from 'vite'

export default defineConfig({
  base: '/christmas-shop/',
  build: {
    sourcemap: true,
    outDir: 'dist/',
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
