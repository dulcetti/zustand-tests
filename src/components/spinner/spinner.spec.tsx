import { render, screen } from '@testing-library/react';

import Spinner from '.';

describe('<Spinner />', () => {
  test('should be render the component in false prop', () => {
    render(<Spinner isLoading={false} />);
  });

  test('should be render the component', () => {
    render(<Spinner isLoading={true} />);
    const spinnerElement = screen.getByLabelText('loader');
    expect(spinnerElement).toBeInTheDocument();
  });
});
