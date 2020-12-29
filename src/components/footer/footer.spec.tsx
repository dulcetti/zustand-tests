import { render, screen } from '@testing-library/react';
import Footer from '.';

test('renders footer form button', () => {
  render(<Footer />);
  const buttonFooter = screen.getByText(/Update CEP State/i);
  expect(buttonFooter).toBeInTheDocument();
});
