import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Link from './index';
import LinkIcon from './icon';

export default {
  title: 'atoms/Links',
  component: Link,
  decorators: [withKnobs],
};

export const element = () => (
  <ContainerStorybook>
    <Link href="https://google.com">google</Link>
  </ContainerStorybook>
);

export const WithIconRight = () => (
  <ContainerStorybook>
    <LinkIcon href="#" icon="close" iconPosition="right">
      with icon
    </LinkIcon>
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
