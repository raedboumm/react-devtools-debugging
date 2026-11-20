import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Fixed app: `npm run dev` → http://localhost:5173
export default defineConfig({
  plugins: [react()],
});
