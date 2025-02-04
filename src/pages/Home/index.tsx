import { Counter } from '@/components/features/Counter';
import { Double } from '@/components/features/Double';
import { CounterContextProvider } from '@/contexts/counter';

const Home = () => {
  return (
    <>
      <CounterContextProvider>
        <Counter />
        <Double />
      </CounterContextProvider>
    </>
  );
};

export default Home;
