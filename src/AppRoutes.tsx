import './App.css';
import { ReactNode, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loading } from './components/common/Loading';

const HomePage = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

const makeSuspense = (children: ReactNode) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={makeSuspense(<HomePage />)} />
        <Route path="*" element={makeSuspense(<NotFound />)} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
