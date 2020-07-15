import React from 'react';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Checkbox from './index';

export default {
  title: 'atoms/Checkbox',
  component: Checkbox,
  decorators: [withKnobs],
};

export const element = () => (
  <ContainerStorybook>
    <Checkbox
      disabled={select('Disable', [true, false], false)}
      isChecked={select('isChecked', [true, false], false)}
      text={text('Label Checkbox', 'Checkbox default')}
    />
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
