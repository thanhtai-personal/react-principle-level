import { ReactNode, createContext, useContext } from 'react';
import { Signal, useComputed, useSignal } from '@preact/signals-react';

export interface CounterState {
  count: Signal<number>;
  double: Signal<number>;
}

export const CounterContext = createContext<CounterState | null>(null);

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

export const useCounterContext = (): CounterState => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error(
      'useCounterContext must be used within a CounterContextProvider'
    );
  }
  return context;
};
