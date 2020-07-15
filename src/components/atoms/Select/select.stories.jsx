import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Select from './index';

export default {
  title: 'atoms/Select',
  component: Select,
  decorators: [withKnobs],
};

const options = [
  {
    label: 'optionI',
    value: 'Option I',
  },
  {
    label: 'optionII',
    value: 'Option II',
  },
  {
    label: 'optionIII',
    value: 'Option III',
  },
  {
    label: 'optionIV',
    value: 'Option IV',
  },
  {
    label: 'optionV',
    value: 'Option V',
  },
];

export const element = () => (
  <ContainerStorybook>
    <Select options={options} />
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
