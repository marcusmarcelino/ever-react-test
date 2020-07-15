import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Checkout from './index';
import Resume from './resume';

export default {
  title: 'atoms/Checkout',
  component: Checkout,
  decorators: [withKnobs],
};

const variants = ['normal', 'resume'];

export const element = () => (
  <ContainerStorybook style={{ padding: '10px' }}>
    <Checkout variant={select('Variant', variants, 'normal')}>Container Checkout</Checkout>
  </ContainerStorybook>
);

export const CheckoutResume = () => <Resume />;

element.story = {
  name: 'Default',
};
