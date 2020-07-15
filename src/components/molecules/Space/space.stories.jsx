import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Space from './index';

const spaceEver = [
  {
    icon: 'bank',
    description: 'bank',
    isComing: true,
  },
  {
    icon: 'shopping',
    description: 'shopping',
    isComing: true,
  },
  {
    icon: 'marketing',
    description: 'marketing',
    variant: 'marketing',
  },
  {
    icon: 'university',
    description: 'university',
    variant: 'university',
  },
];

const styles = {
  width: '100%',
  height: '100vh',
  padding: '20px',
  maxWidth: '1920px',
};

export default {
  title: 'molecules/Space',
  component: Space,
  decorators: [withKnobs],
};

export const element = () => (
  <ContainerStorybook style={styles}>
    <Space data={spaceEver} title={text('Title', 'Espaço Ever')} />
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
