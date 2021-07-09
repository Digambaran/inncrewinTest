import React from 'react';
import { render } from '../../test/test-utils';

import LayoutContainer from './LayoutContainer';

it('can browse to the about page', async () => {
  // For `LayoutContainer`, you should be able to render the layout container, followed by navigating to the About page.
  const {getByText,history:{navigate}} = render(<LayoutContainer/>,{route:"/about"});
  expect(getByText(/about page/i)).toBeInTheDocument();

  await navigate("/")
  expect(getByText(/welcome!/i)).toBeInTheDocument();

  await navigate('/about')
  expect(getByText(/about page/i)).toBeInTheDocument();

});

// there seems to be some problem with navigate in testing with fireEvent

// it('check if user click called navigate',()=>{
  
//   const {getByText,history} = render(<LayoutContainer/>);
//   const spy=jest.spyOn(history,'navigate')

//   // fireEvent.click(getByText(/go to about/i))
//   // history.navigate('/about')
//   expect(spy).toHaveBeenCalledTimes(1)
//   expect(spy).toHaveBeenCalledWith('/about')

// })
