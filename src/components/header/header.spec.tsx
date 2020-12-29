import { render, screen } from '@testing-library/react';

import Header from '.';

test('renders learn react link', () => {
  render(<Header />);
  const headerElement = screen.getByText(/Update Content state/i);
  expect(headerElement).toBeInTheDocument();
});
