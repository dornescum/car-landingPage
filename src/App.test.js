import {cleanup, render, screen} from '@testing-library/react';
import App from './App';
import 'intersection-observer';

test('serch word', () => {
  render(<App />);
  const linkElement = screen.getByText(/best car ever/i);
  // const linkElement = screen.getByText('best car ever');
  // const linkElement = screen.toHaveTextContent(/car/i);
  expect(linkElement).toBeInTheDocument();
});
test('serch word spate', () => {
  render(<App />);
  const linkElement = screen.getByText(/spate/i);
  // const linkElement = screen.getByText('best car ever');
  // const linkElement = screen.toHaveTextContent(/car/i);
  expect(linkElement).toBeInTheDocument();
});
test('serch btn', () => {
  render(<App />);
  const btn = screen.getByRole('button');
  expect(btn).toHaveLength(6);
});


afterEach(cleanup)