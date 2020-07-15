import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Label from './index';

export default {
  title: 'atoms/Label',
  component: Label,
  decorators: [withKnobs],
};

export const element = () => (
  <ContainerStorybook>
    <Label>{text('Text', 'Label Default')}</Label>
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
