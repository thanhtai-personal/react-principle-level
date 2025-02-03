import { useCounterContext } from '@/store/counter';

export const Counter = () => {
  const { count } = useCounterContext();

  return (
    <div className="card">
      <button onClick={() => count.value++}>
        count is <span>{count}</span>
      </button>
    </div>
  );
};
