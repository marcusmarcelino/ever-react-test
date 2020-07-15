import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Badge from './index';

export default {
  title: 'atoms/Badge',
  component: Badge,
  decorators: [withKnobs],
};

export const element = () => (
  <ContainerStorybook>
    <Badge text={text('Description', 'em breve')} />
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
