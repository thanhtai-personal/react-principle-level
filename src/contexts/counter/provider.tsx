import { ReactNode } from 'react';
import { useComputed, useSignal } from '@preact/signals-react';
import { CounterContext } from './context';

type Props = {
  children: ReactNode;
};

export const CounterContextProvider = ({ children }: Props) => {
  const count = useSignal<number>(0);
  const double = useComputed<number>(() => count.value * 2);

  return (
    <CounterContext.Provider
      value={{
        count,
        double,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
