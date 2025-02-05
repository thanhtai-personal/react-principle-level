import './App.css';
import { ReactElement, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loading } from './components/common/Loading';

const HomePage = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

const makeSuspense = (children: ReactElement) => {
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
