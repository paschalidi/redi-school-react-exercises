import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';

import Welcome from '../exercises/react/01';

test('renders component with message', () => {
  const {getByText} = render(<Welcome />);
  expect(getByText('Welcome to React!')).toBeInTheDocument();
});
