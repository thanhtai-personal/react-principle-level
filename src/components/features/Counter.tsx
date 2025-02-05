import { useCounterContext } from '@/contexts/counter';
import { Button } from '@/components/common/shadcn/button';

export const Counter = () => {
  const { count } = useCounterContext();

  return (
    <div className="card">
      <Button onClick={() => count.value++}>
        count is <span>{count}</span>
      </Button>
    </div>
  );
};
