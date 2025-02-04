import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './AppRoutes.tsx';
import { BrowserRouter } from 'react-router-dom';
import { AppStore } from './store/index.ts';
import { ThemeProvider } from '@/components/features/ThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppStore.MobxProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter
          future={{
            v7_relativeSplatPath: true,
          }}
        >
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </AppStore.MobxProvider>
  </StrictMode>
);
