import React from 'react';
import { Login } from './../Pages';

import { render, fireEvent, wait } from '@testing-library/react';

it('has email field', () => {
  const { container } = render(<Login />);
  const email = container.querySelector('input[name="email"]');
  expect(email).toBeInTheDocument();
});

it('has password field', () => {
  const { container } = render(<Login />);
  const password = container.querySelector('input[name="password"]');
  expect(password).toBeInTheDocument();
});

it('submits correct values', async () => {
  const mock = jest.fn();
  const { container } = render(<Login />);
  const email = container.querySelector('input[name="email"]');
  const password = container.querySelector('input[name="password"]');
  const submit = container.querySelector('button[type="submit"]');

  await wait(() => {
    fireEvent.change(email, {
      target: {
        value: 'mock@email.com'
      }
    });
  });

  await wait(() => {
    fireEvent.change(password, {
      target: {
        value: 'mockpassword'
      }
    });
  });

  await wait(() => {
    fireEvent.click(submit);
  });

  wait(() => {
    expect(mock).toBeCalled();
  });
});
