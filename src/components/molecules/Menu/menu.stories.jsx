import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Menu from './index';

export default {
  title: 'molecules/Menu',
  component: Menu,
  decorators: [withKnobs],
};

export const element = () => (
  <ContainerStorybook>
    <Menu />
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
