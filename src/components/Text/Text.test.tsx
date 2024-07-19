
import React from 'react';
import {render, screen} from '@testing-library/react'
import Text from './Text'

test('It should render text properly with the correct children', () => {
  render(<Text textType='subtitle'>Hello</Text>);
  expect(screen.getByText('Hello')).toBeDefined();
});
test('It should render text with the type correct', () => {
  render(<Text textType='heading'>Hello</Text>);
  // it should be render h2
  const textElement = screen.getByText('Hello');
  expect(textElement.tagName.toLowerCase()).toBe("h2");
});
