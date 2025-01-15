import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://your-backend-api.com',  // Replace with your backend URL
        changeOrigin: true,  // Adjusts the 'Origin' header for cross-origin requests
        rewrite: (path) => path.replace(/^\/api/, ''),  // Optional: If you need to rewrite the path
      },
    },
  },
});
