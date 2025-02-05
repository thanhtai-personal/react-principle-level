import { Progress } from '@/components/common/shadcn/progress';

export function Loading(props: any) {
  return <Progress {...(props || {})} />;
}
