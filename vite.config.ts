import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // se estiver usando Vue, senão use seu framework

export default defineConfig({
  plugins: [vue()],
  base: './', // Caminhos relativos para funcionar no Vercel
})
