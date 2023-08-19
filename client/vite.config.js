import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
        '/api': 'http://localhost:8800' // Your backend API URL
      }
  },
  plugins: [react()],
});