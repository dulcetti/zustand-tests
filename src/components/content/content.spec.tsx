import { render, screen } from '@testing-library/react';

import Content from '.';

test('renders learn react link', () => {
  render(<Content />);
  const contentElement = screen.getByText(/O CEP do state é esse: 20541145/i);
  expect(contentElement).toBeInTheDocument();
});
