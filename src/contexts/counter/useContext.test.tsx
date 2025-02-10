import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CounterContextProvider } from './provider';
import { useCounterContext } from './useContext';

// Test Component to Consume the Context
const TestComponent = () => {
  const { count, double } = useCounterContext();
  return (
    <div>
      <p data-testid="count">{count.value}</p>
      <p data-testid="double">{double.value}</p>
    </div>
  );
};

describe('useCounterContext', () => {
  it('retrieves the context inside CounterContextProvider', () => {
    render(
      <CounterContextProvider>
        <TestComponent />
      </CounterContextProvider>
    );

    expect(screen.getByTestId('count')).toHaveTextContent('0');
    expect(screen.getByTestId('double')).toHaveTextContent('0');
  });

  it('throws an error when used outside CounterContextProvider', () => {
    const renderOutsideProvider = () => render(<TestComponent />);
    expect(renderOutsideProvider).toThrow(
      'useCounterContext must be used within a CounterContextProvider'
    );
  });
});
