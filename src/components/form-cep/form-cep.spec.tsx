import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

import FormCep from './index';

describe('<FormCep />', () => {
  test('should be defined', () => {
    expect(FormCep).toBeDefined();
  });

  test('should be rendered with customized title', () => {
    render(<FormCep buttonLabel='Click me' />);
    expect(screen.getByText(/Click me/)).toBeInTheDocument();
  });

  test('should be show the error message', async () => {
    render(<FormCep buttonLabel='Click me' />);

    await act(async () => {
      const input = screen.getByLabelText('cep-input');
      fireEvent.change(input, { target: { value: '' } });
      await userEvent.click(screen.getByRole('button'));
    });

    expect(screen.getByText(/Required/)).toBeInTheDocument();
  });

  test('should be update the cep state', async () => {
    const result = render(<FormCep buttonLabel='Click me' />);

    await act(async () => {
      const input = screen.getByLabelText('cep-input');
      fireEvent.change(input, { target: { value: '20510060' } });
      await userEvent.click(screen.getByRole('button'));
      expect(input.value).toBe('20510060');
    });
  });
});
