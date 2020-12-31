import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from '.';

describe('<Header />', () => {
  test('should be render the component', () => {
    render(<Header />);
    const headerElement = screen.getByText(/Update Content state/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('should be update the state when button is clicked', async () => {
    render(<Header />);
    await userEvent.click(screen.getByRole('button'));
  });
});
