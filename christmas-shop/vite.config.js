import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    sourcemap: true,
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
