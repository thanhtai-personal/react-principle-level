import { TFormController } from '@/types/TFormController';
import { ForwardedRef, forwardRef, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';
import { ZodRawShape, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/common/shadcn/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/common/shadcn/form';
import { TFormItem } from '@/types/TFormItem';

type Props<T extends ZodRawShape> = {
  className?: string;
  formSchema: z.ZodObject<T, 'strip', z.ZodTypeAny, T, T>;
  fields: TFormItem<T>[];
  onsubmit?: (data: T) => Promise<void>;
  useOutsiteSubmit?: boolean;
  loading?: boolean;
  texts?: {
    submit?: string;
  };
};

export const AppForm = <T extends ZodRawShape>(
  {
    className = '',
    formSchema,
    onsubmit,
    useOutsiteSubmit,
    texts,
    fields,
  }: Props<T>,
  ref: ForwardedRef<TFormController>
) => {
  useImperativeHandle(ref, () => ({}));

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: undefined,
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    await onsubmit?.(values as T);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={`space-y-8 ${className}`}
      >
        {fields.map((fItem: TFormItem<T>) => (
          <FormField
            key={fItem.key}
            control={form.control}
            name={fItem.name}
            render={
              fItem.render ||
              (({ field }) => (
                <FormItem>
                  {fItem.label && <FormLabel>{fItem.label}</FormLabel>}
                  {fItem.renderInput && (
                    <FormControl>{fItem.renderInput(field)}</FormControl>
                  )}
                  {fItem.description && (
                    <FormDescription>{fItem.description}</FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              ))
            }
          />
        ))}
        <div className="flex w-full justify-end">
          {!useOutsiteSubmit && (
            <Button type="submit">{texts?.submit || 'Submit'}</Button>
          )}
        </div>
      </form>
    </Form>
  );
};

export const ForwardedAppForm = forwardRef(AppForm);

export default ForwardedAppForm;
