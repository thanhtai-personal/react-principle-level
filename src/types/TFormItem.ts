import { ReactNode } from 'react';
import {
  ControllerRenderProps,
  ControllerFieldState,
  Path,
  UseFormStateReturn,
} from 'react-hook-form';
import { ZodRawShape } from 'zod';

export type TFormItem<T extends ZodRawShape> = {
  key: string;
  name: Path<T>;
  label?: string | ReactNode;
  description?: string | ReactNode;
  renderInput?: (field: ControllerRenderProps<T, Path<T>>) => ReactNode;
  render?: ({
    field,
    fieldState,
    formState,
  }: {
    field: ControllerRenderProps<T, Path<T>>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<T>;
  }) => ReactNode;
};
