import reactLogo from '@/assets/react.svg';
import viteLogo from '@/assets/vite.svg';
import { Counter } from '@/components/features/Counter';
import { Double } from '@/components/features/Double';
import { CounterContextProvider } from '@/contexts/counter';

const Home = () => {
  return (
    <>
      <div className="flex flex-row items-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <CounterContextProvider>
        <Counter />
        <Double />
      </CounterContextProvider>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default Home;
