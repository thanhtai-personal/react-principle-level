import { useContext } from 'react';
import { CounterContext, CounterState } from './context';

export const useCounterContext = (): CounterState => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error(
      'useCounterContext must be used within a CounterContextProvider'
    );
  }
  return context;
};
