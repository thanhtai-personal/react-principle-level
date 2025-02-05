import { Button } from '@/components/common/shadcn/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/common/shadcn/dialog';
import { ModalController } from '@/types/ModalController';
import {
  ForwardedRef,
  ReactElement,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';

type Props = {
  triggerElement: ReactElement;
  children: ReactElement;
  footer?: ReactElement;
  header?: ReactElement;
  texts?: {
    submit?: string;
    title?: string;
    titleDescription?: string;
  };
  className?: string;
  onSubmit?: () => Promise<void>;
};

export const AppModal = forwardRef(
  (
    {
      triggerElement,
      children,
      footer,
      header,
      texts,
      className = '',
      onSubmit,
    }: Props,
    ref: ForwardedRef<ModalController>
  ) => {
    const [opened, setOpenned] = useState(false);

    useImperativeHandle(ref, () => ({
      close: () => {
        setOpenned(false);
      },
      open: () => {
        setOpenned(true);
      },
      toggle: () => {
        setOpenned((prev) => !prev);
      },
    }));

    const handleSubmit = async () => {
      await onSubmit?.();
    };

    const footerElement = useMemo(() => {
      if (footer) return footer;

      if (texts?.submit) {
        return (
          <Button type="submit" onClick={handleSubmit}>
            {texts.submit}
          </Button>
        );
      }

      return null;
    }, [footer, texts?.submit, handleSubmit]);

    return (
      <Dialog
        open={opened}
        onOpenChange={() => {
          setOpenned((prev) => !prev);
        }}
      >
        {triggerElement}
        <DialogContent className={`sm:max-w-[425px] ${className}`}>
          <DialogHeader>
            {header ? (
              header
            ) : (
              <>
                {texts?.title && <DialogTitle>{texts?.title}</DialogTitle>}
                {texts?.titleDescription && (
                  <DialogDescription>
                    {texts?.titleDescription}
                  </DialogDescription>
                )}
              </>
            )}
          </DialogHeader>
          {children}
          {footerElement && <DialogFooter>{footerElement}</DialogFooter>}
        </DialogContent>
      </Dialog>
    );
  }
);
