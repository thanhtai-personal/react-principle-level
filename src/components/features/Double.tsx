import { useCounterContext } from '@/contexts/counter';

export const Double = (props: any) => {
  const { double } = useCounterContext();

  return <div className="card">Double is {double}</div>;
};
