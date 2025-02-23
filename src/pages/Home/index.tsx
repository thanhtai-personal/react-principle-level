import { lazy, Suspense } from 'react';
import { Banner } from './Banner';

const WhatIsNixusAI = lazy(() => import('./WhatIsNixusAI'));
const Features = lazy(() => import('./Features'));
const HowItWork = lazy(() => import('./HowItWork'));
const Roadmap = lazy(() => import('./Roadmap'));

const Home = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Banner />
      <Suspense fallback={<div>Loading...</div>}>
        <WhatIsNixusAI />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Features />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <HowItWork />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Roadmap />
      </Suspense>
    </div>
  );
};

export default Home;
