import { render, screen } from '@testing-library/react';
import { signal } from '@preact/signals-react';
import { useContext } from 'react';
import { describe, it, expect } from 'vitest';
import { CounterContext, CounterState } from './context';

describe('CounterContext', () => {
  it('should have a default value of null', () => {
    expect(CounterContext).toBeDefined();
    expect((CounterContext as any)._currentValue).toBeNull();
  });

  it('provides the correct counter state', () => {
    const mockState: CounterState = {
      count: signal(5),
      double: signal(10),
    };

    const TestComponent = () => {
      const context = useContext(CounterContext);
      if (!context) return <div>No Context</div>;
      return (
        <div>
          <p data-testid="count">{context.count.value}</p>
          <p data-testid="double">{context.double.value}</p>
        </div>
      );
    };

    render(
      <CounterContext.Provider value={mockState}>
        <TestComponent />
      </CounterContext.Provider>
    );

    expect(screen.getByTestId('count')).toHaveTextContent('5');
    expect(screen.getByTestId('double')).toHaveTextContent('10');
  });
});
