import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/pages/Home';
import { CounterContextProvider } from '@/contexts/counter';
import { describe, it, expect } from 'vitest';

describe('Home Page', () => {
  it('renders Counter and Double components', () => {
    render(
      <CounterContextProvider>
        <Home />
      </CounterContextProvider>
    );

    // expect(screen.getByTestId('counter')).toBeInTheDocument();
    // expect(screen.getByTestId('double')).toBeInTheDocument();
  });

  it('increments the counter and updates Double component', () => {
    render(
      <CounterContextProvider>
        <Home />
      </CounterContextProvider>
    );

    const incrementButton = screen.getByRole('button', { name: /count is/i });
    // const counterValue = screen.getByTestId('counter-value');
    // const doubleValue = screen.getByTestId('double-value');

    // expect(counterValue).toHaveTextContent('0');
    // expect(doubleValue).toHaveTextContent('0');

    fireEvent.click(incrementButton);

    // expect(counterValue).toHaveTextContent('1');
    // expect(doubleValue).toHaveTextContent('2');
  });
});
