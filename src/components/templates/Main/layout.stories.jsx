import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Layout from './index';

export default {
  title: 'templates/Layout',
  component: Layout,
  decorators: [withKnobs],
};

export const element = () => (
  <ContainerStorybook>
    <Layout title="Home">content main</Layout>
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
