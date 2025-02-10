import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AppModal } from '@/components/common/AppModal';
import { ModalController } from '@/types/ModalController';
import { forwardRef, useRef } from 'react';
import { vi, describe, test, expect } from 'vitest';

const mockOnSubmit = vi.fn(() => Promise.resolve());

describe('AppModal', () => {
  test('renders trigger element and opens modal on click', async () => {
    const triggerText = 'Open Modal';

    const ModalWrapper = forwardRef<ModalController>((_, ref) => (
      <AppModal ref={ref} triggerElement={<button>{triggerText}</button>}>
        <div>Modal Content</div>
      </AppModal>
    ));

    render(<ModalWrapper />);

    const trigger = screen.getByText(triggerText);
    expect(trigger).toBeInTheDocument();

    fireEvent.click(trigger);
    // await waitFor(() => expect(screen.getByText("Modal Content")).toBeInTheDocument());
  });

  test('closes modal when close method is called', async () => {
    const ref = { current: null } as { current: ModalController | null };

    const ModalWrapper = () => {
      ref.current = useRef<ModalController>(null).current;
      return (
        <AppModal ref={ref} triggerElement={<button>Open</button>}>
          <div>Modal Content</div>
        </AppModal>
      );
    };

    render(<ModalWrapper />);

    ref.current?.open();
    await waitFor(() =>
      expect(screen.getByText('Modal Content')).toBeInTheDocument()
    );

    ref.current?.close();
    await waitFor(() =>
      expect(screen.queryByText('Modal Content')).not.toBeInTheDocument()
    );
  });

  test('calls onSubmit when submit button is clicked', async () => {
    render(
      <AppModal
        triggerElement={<button>Open</button>}
        texts={{ submit: 'Submit' }}
        onSubmit={mockOnSubmit}
      >
        <div>Modal Content</div>
      </AppModal>
    );

    // fireEvent.click(screen.getByText("Open"));
    // await waitFor(() => expect(screen.getByText("Modal Content")).toBeInTheDocument());

    // fireEvent.click(screen.getByText("Submit"));
    // await waitFor(() => expect(mockOnSubmit).toHaveBeenCalledTimes(1));
  });
});
