import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import {fileURLToPath, URL} from 'node:url'  // sirve para manejar rutas de archivos 

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),tailwindcss()],
  resolve: {
    alias: {
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)), // Alias para acceder a los componentes
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)), // Alias para acceder a los assets
    }
  },
})
