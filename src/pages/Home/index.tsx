import { lazy, Suspense } from 'react';
import { Banner } from './Banner';
import { topElementIds } from '@/constant/topElementIds';

const WhatIsNixusAI = lazy(() => import('./WhatIsNixusAI'));
const Features = lazy(() => import('./Features'));
const HowItWork = lazy(() => import('./HowItWork'));
const Roadmap = lazy(() => import('./Roadmap'));

const Home = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div id={topElementIds.banner}></div>
      <Banner />
      <Suspense fallback={<div>Loading...</div>}>
        <div id={topElementIds.what}></div>
        <WhatIsNixusAI />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div id={topElementIds.features}></div>
        <Features />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div id={topElementIds.how}></div>
        <HowItWork />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div id={topElementIds.roadnap}></div>
        <Roadmap />
      </Suspense>
    </div>
  );
};

export default Home;
