import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

export function Spinner({ className }: Props) {
  return (
    <div
      className={cn(
        'h-6 w-6 animate-spin rounded-full border-4 border-primary border-t-transparent',
        className
      )}
    />
  );
}
