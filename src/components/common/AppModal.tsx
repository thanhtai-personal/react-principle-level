import { Button } from '@/components/common/shadcn/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/common/shadcn/dialog';
import { ModalController } from '@/types/ModalController';
import {
  ForwardedRef,
  ReactNode,
  forwardRef,
  useImperativeHandle,
} from 'react';

type Props = {
  triggerElement: ReactNode;
  children: ReactNode;
  footer: ReactNode;
  texts?: {
    submit?: string;
    title?: string;
    titleDescription?: string;
  };
  className?: string;
};

export const AppModal = forwardRef(
  (
    { triggerElement, children, footer, texts, className = '' }: Props,
    ref: ForwardedRef<ModalController>
  ) => {
    useImperativeHandle(ref, () => ({}));

    return (
      <Dialog>
        <DialogTrigger asChild>{triggerElement}</DialogTrigger>
        <DialogContent className={`sm:max-w-[425px] ${className}`}>
          <DialogHeader>
            {texts?.title && <DialogTitle>{texts?.title}</DialogTitle>}
            {texts?.titleDescription && (
              <DialogDescription>{texts?.titleDescription}</DialogDescription>
            )}
          </DialogHeader>
          {children}
          {
            <DialogFooter>
              {footer ? footer : <Button type="submit">{texts?.submit}</Button>}
            </DialogFooter>
          }
        </DialogContent>
      </Dialog>
    );
  }
);
