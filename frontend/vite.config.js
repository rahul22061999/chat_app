import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Keeps polling enabled (useful in environments like WSL, Docker, etc.)
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5001',
        
      },
    },
  },
});
