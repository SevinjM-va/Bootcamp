import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// !!!test file jestin file sonlugu olub functionlari butun ehtimallarini test etmek ucun istifade olunur