import {cleanup, render, screen} from '@testing-library/react';
import App from './App';
import 'intersection-observer';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/Memories/i);
  const linkElement = screen.toHaveTextContent('Memories');
  expect(linkElement).toBeInTheDocument();
});
afterEach(cleanup)