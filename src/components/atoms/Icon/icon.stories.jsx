import React from 'react';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Icon from './index';

export default {
  title: 'atoms/Icon',
  component: Icon,
  decorators: [withKnobs],
};

const icons = [
  'buyOnline',
  'calendar',
  'close',
  'growth',
  'home',
  'partners',
  'payment',
  'question',
  'rate',
  'shoppingBag',
  'shoppingCart',
  'spaceShip',
  'success',
  'support',
];

export const element = () => (
  <ContainerStorybook>
    <Icon color={text('Color', '#000')} icon={select('Icon', icons, 'home')} position={text('Position', 'left')} />
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
