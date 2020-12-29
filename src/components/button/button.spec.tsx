import { render, screen } from '@testing-library/react';
import Footer from '.';

test('renders learn react link', () => {
  render(<Footer label='Footer Button' />);
  const buttonElement = screen.getByText(/Footer Button/i);
  expect(buttonElement).toBeInTheDocument();
});
