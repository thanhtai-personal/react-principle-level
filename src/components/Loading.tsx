import { Spinner, SpinnerProps } from '@material-tailwind/react';

export default function Loading(props: SpinnerProps) {
  return (
    <Spinner
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      {...props}
    />
  );
}
