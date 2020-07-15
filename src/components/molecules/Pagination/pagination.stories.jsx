import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Pagination from './index';

export default {
  title: 'molecules/Pagination',
  component: Pagination,
  decorators: [withKnobs],
};

export const element = () => (
  <ContainerStorybook>
    <Pagination
      perPage={number('PerPage', 10)}
      total={number('Total', 20)}
      currentPage={number('CurrentPage', 1)}
      paginate={() => {}}
    />
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
