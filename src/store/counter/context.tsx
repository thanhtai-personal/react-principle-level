import { createContext } from 'react';
import { Signal } from '@preact/signals-react';

export interface CounterState {
  count: Signal<number>;
  double: Signal<number>;
}

export const CounterContext = createContext<CounterState | null>(null);
