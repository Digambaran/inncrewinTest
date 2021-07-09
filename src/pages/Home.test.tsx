import React from 'react';
import { render } from '../../test/test-utils';

import Home from './Home';

it('renders <Home /> page', () => {
  // You should be able to show that you can verify Home rendered correctly
  const {getByText,queryByText}=render(<Home/>);
  expect(queryByText(/^Welcome!$/i).tagName).toEqual('H1');
  expect(queryByText(/error/i)).not.toBeInTheDocument();
  expect(getByText(/go to about/i)).toHaveAttribute('href','/about')
});
