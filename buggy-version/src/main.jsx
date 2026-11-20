/**
 * main.jsx — entry point. Mounts <App /> into #root.
 * StrictMode adds extra development checks (and is visible in DevTools).
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
