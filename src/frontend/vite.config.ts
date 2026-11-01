import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', 'API_');

  return {
    plugins: [react()],
    server: {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'X-Frame-Options': 'DENY',
      },
      watch: {
        usePolling: true,
        interval: 500,
      },
      proxy: {
        '/api': env.API_PROXY_TARGET ?? 'http://127.0.0.1:3000',
      },
    },
  };
});
