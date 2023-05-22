import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: resolve('src', 'lib', 'index.ts'),
      name: 'react-modal',
      formats: ['es', 'umd'],
      fileName: (format) => `react-modal.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    },
    cssCodeSplit: true
  }
})
