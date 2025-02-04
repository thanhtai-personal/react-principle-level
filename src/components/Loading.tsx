import { Spinner, SpinnerProps } from '@material-tailwind/react';

export function Loading(props: SpinnerProps) {
  return (
    <Spinner
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      {...props}
    />
  );
}
