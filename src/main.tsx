import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './AppRoutes.tsx';
import { BrowserRouter } from 'react-router-dom';
import { AppStore } from './store/index.ts';
import { ThemeProvider } from '@/components/features/theme/ThemeProvider.tsx';
import { Layout } from '@/components/features/layout/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppStore.MobxProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout>
          <BrowserRouter
            future={{
              v7_relativeSplatPath: true,
            }}
          >
            <AppRoutes />
          </BrowserRouter>
        </Layout>
      </ThemeProvider>
    </AppStore.MobxProvider>
  </StrictMode>
);
