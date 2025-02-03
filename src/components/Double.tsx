import { useCounterContext } from '@/store/counter';

export const Double = (props: any) => {
  const { double } = useCounterContext();

  return <div className="card">Double is {double}</div>;
};
