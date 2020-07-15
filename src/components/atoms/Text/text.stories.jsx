import React from 'react';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Text from './index';

export default {
  title: 'atoms/Text',
  component: Text,
  decorators: [withKnobs],
};

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
const variants = ['normal', 'light', 'medium', 'bold', 'semiBold'];

export const element = () => (
  <ContainerStorybook>
    <Text
      className={text('ClassName', 'link')}
      size={select('Size', sizes, 'sm')}
      variant={select('Variant', variants, 'normal')}
      onClick={() => false}
    >
      {text('Children', 'Lorem Ipsum')}
    </Text>
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
