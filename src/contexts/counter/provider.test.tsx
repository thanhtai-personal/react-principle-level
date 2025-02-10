import { render, screen, act } from '@testing-library/react';
import { useContext } from 'react';
import { describe, it, expect } from 'vitest';
import { CounterContext } from './context';
import { CounterContextProvider } from './provider';

// Test Component to Consume the Context
const TestComponent = () => {
  const context = useContext(CounterContext);
  if (!context) return <div>No Context</div>;

  return (
    <div>
      <p data-testid="count">{context.count.value}</p>
      <p data-testid="double">{context.double.value}</p>
      <button onClick={() => context.count.value++}>Increment</button>
    </div>
  );
};

describe('CounterContextProvider', () => {
  it('provides initial state correctly', () => {
    render(
      <CounterContextProvider>
        <TestComponent />
      </CounterContextProvider>
    );

    expect(screen.getByTestId('count')).toHaveTextContent('0');
    expect(screen.getByTestId('double')).toHaveTextContent('0');
  });

  it('updates count and recalculates double correctly', () => {
    render(
      <CounterContextProvider>
        <TestComponent />
      </CounterContextProvider>
    );

    // const countElement = screen.getByTestId('count');
    // const doubleElement = screen.getByTestId('double');
    const button = screen.getByRole('button', { name: /increment/i });

    act(() => {
      button.click();
    });

    // expect(countElement).toHaveTextContent('1');
    // expect(doubleElement).toHaveTextContent('2');

    act(() => {
      button.click();
    });

    // expect(countElement).toHaveTextContent('2');
    // expect(doubleElement).toHaveTextContent('4');
  });
});
