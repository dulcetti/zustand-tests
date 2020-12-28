import { render, screen } from '@testing-library/react';

import Layout from '.';

test('renders the header', () => {
  render(<Layout />);
  const title = screen.getByText(/Content/i);
  expect(title).toBeInTheDocument();
});
