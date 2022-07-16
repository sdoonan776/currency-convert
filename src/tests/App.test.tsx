import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './../App';

test('renders app component to be truthy', () => {
  const wrapper = render(<App/>);
  expect(wrapper).toBeTruthy();
});
