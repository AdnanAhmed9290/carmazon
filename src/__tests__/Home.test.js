import React from 'react';
import { Home } from './../Pages';

import { render, fireEvent, wait } from '@testing-library/react';

it('has year field', () => {
  const { container } = render(<Home />);
  const year = container.querySelector('select[name="year"]');
  expect(year).toBeInTheDocument();
});
it('has make field', () => {
  const { container } = render(<Home />);
  const make = container.querySelector('select[name="make"]');
  expect(make).toBeInTheDocument();
});
it('has model field', () => {
  const { container } = render(<Home />);
  const model = container.querySelector('select[name="model"]');
  expect(model).toBeInTheDocument();
});

it('submits correct values', async () => {
  const mock = jest.fn();
  const { container } = render(<Home />);
  const year = container.querySelector('select[name="year"]');
  const make = container.querySelector('select[name="make"]');
  const model = container.querySelector('select[name="model"]');
  const submit = container.querySelector('button[type="submit"]');

  await wait(() => {
    fireEvent.change(year, {
      target: {
        value: '2010'
      }
    });
  });

  await wait(() => {
    fireEvent.change(make, {
      target: {
        value: 'Honda'
      }
    });
  });

  await wait(() => {
    fireEvent.change(model, {
      target: {
        value: '2014'
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
