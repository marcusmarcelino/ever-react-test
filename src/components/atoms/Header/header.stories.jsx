import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Header from './index';

export default {
  title: 'atoms/Header',
  component: Header,
  decorators: [withKnobs],
};

export const element = () => (
  <ContainerStorybook>
    <Header text={text('Description', 'em breve')} />
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
