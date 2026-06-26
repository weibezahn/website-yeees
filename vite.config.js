import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

export default defineConfig(({ command }) => ({
  plugins: [svelte()],
  base: command === 'serve' ? '/' : '/website-yeees/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        calendar: resolve(__dirname, 'calendar.html'),
        tips: resolve(__dirname, 'tips.html')
      }
    }
  }
}))