import React from 'react';
import { render, screen } from '@testing-library/react';
import SiteLayout from '../layouts/SiteLayout';

test('renders app component to be truthy', () => {
  const wrapper = render(<SiteLayout/>);
  expect(wrapper).toBeTruthy();
});
