import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Filter from './index';

export default {
  title: 'molecules/Filter',
  component: Filter,
  decorators: [withKnobs],
};

export const element = () => (
  <ContainerStorybook>
    <Filter filterText={text('FilterText', 'Text')} onFilter={text('OnFilter', 'Text')} />
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
