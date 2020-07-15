import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Button from './index';

export default {
  title: 'atoms/Button',
  component: Button,
  decorators: [withKnobs],
};

const variants = ['primary', 'secondary', 'dark', 'success'];
const icons = ['', 'copy', 'share', 'trash', 'arrowRight'];
const position = ['start', 'center', 'end'];

export const element = () => (
  <ContainerStorybook>
    <Button
      variant={select('Variant', variants, 'primary')}
      icon={select('Icon', icons, '')}
      showIcon={select('Show Icon', [true, false], false)}
    >
      {text('Text', 'Button')}
    </Button>
  </ContainerStorybook>
);

export const Group = () => (
  <ContainerStorybook>
    <Button.Group className={select('Position', position, 'start')}>
      <Button
        variant={select('Variant', variants, 'primary')}
        icon={select('Icon', icons, '')}
        showIcon={select('Show Icon', [true, false], false)}
      >
        {text('Text', 'Button')}
      </Button>
    </Button.Group>
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
