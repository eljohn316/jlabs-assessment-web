import '@/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { router } from '@/lib/router';
import { App } from '@/app';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
