import { fireEvent } from '@testing-library/react';
import React from 'react';
import { render } from '../../test/test-utils';

import About from './About';

it('renders <About /> page', () => {
  // You should be able to verify the About page rendered correctly.
  const {getByText,getByRole}=render(<About/>);
  expect(getByText(/^about page$/i)).toBeInTheDocument();
  expect(getByRole("button")).toHaveTextContent(/^increment$/i);
  expect(getByText(/^current count: \d+$/i)).toBeInTheDocument();
});

it('clicks button and fires increment counter', () => {
  // You should be able to click the increment button and verify the count.
  const s={sample:{counter:4}}
  const {getByText,getByRole,queryByText}=render(<About/>,{initialState:s});

  expect(getByText(/current count: 4/i)).toBeInTheDocument();

  fireEvent.click(getByRole('button'))

  expect(queryByText(/current count: 5/i)).toBeInTheDocument();

});
