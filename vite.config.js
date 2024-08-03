import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // plug in jsdom to vite
    environment: 'jsdom',
    // global setup for tests
    setupFiles: './tests/setup.js', 
  }
})
