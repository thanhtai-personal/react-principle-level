import { Spinner } from './shadcn/Spinner';

type Props = {
  className?: string;
  texts?: {
    loading?: string;
  };
};

export function Loading({ texts, className }: Props) {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <Spinner className={className} />
        <p className="text-gray-500 dark:text-gray-400">
          {texts?.loading || 'Loading...'}
        </p>
      </div>
    </div>
  );
}
