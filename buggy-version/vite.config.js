import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Original buggy app: `npm run dev:buggy` → http://localhost:5174
export default defineConfig({
  plugins: [react()],
  server: { port: 5174 },
});
