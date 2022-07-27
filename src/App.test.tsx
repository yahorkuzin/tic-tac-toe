import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByText(/Current Player:/i)).toBeInTheDocument();
  expect(screen.queryByText(/Winner:/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Game is finished/i)).not.toBeInTheDocument();
  expect(screen.queryByRole('button')).not.toBeInTheDocument();
});
