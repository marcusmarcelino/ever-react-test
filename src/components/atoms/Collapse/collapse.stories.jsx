import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Collapse from './index';

export default {
  title: 'atoms/Collapse',
  component: Collapse,
  decorators: [withKnobs],
};

export const element = () => (
  <ContainerStorybook>
    <Collapse
      title={text('Title', 'Title Default')}
      titlePosition={select('Title Position', ['left', 'center'], 'center')}
    >
      Content
    </Collapse>
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
