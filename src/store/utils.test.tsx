import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { createMobxContext } from './utils';

describe('createMobxContext', () => {
  const mockStore = { value: 42 };
  const { MobxProvider, getUseStore } = createMobxContext(mockStore);
  const useStore = getUseStore<{ value: number }>();

  it('should create a valid MobxProvider component', () => {
    expect(MobxProvider).toBeDefined();
  });

  it('should provide store context to children', () => {
    const TestComponent = () => {
      const store = useStore();
      return <div data-testid="store-value">{store.value}</div>;
    };

    render(
      <MobxProvider>
        <TestComponent />
      </MobxProvider>
    );

    expect(screen.getByTestId('store-value')).toHaveTextContent('42');
  });

  it('should return empty object if useStore is used without a provider', () => {
    const TestComponent = () => {
      const store = useStore();
      return <div data-testid="store-value">{JSON.stringify(store)}</div>;
    };

    render(<TestComponent />);

    expect(screen.getByTestId('store-value')).toHaveTextContent('{}');
  });
});
