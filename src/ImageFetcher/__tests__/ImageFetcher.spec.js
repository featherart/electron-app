import React from 'react';
import { render, wait } from '@testing-library/react';
import { ImageFetcher } from '../ImageFetcher';

test('renders', async () => {
  const { asFragment } = render(<ImageFetcher />);
  await wait(() => expect(asFragment).toMatchSnapshot());
});
