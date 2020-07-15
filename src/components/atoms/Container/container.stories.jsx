import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Container from './index';
import ContainerLogin from './login';

export default {
  title: 'atoms/Container',
  component: Container,
  decorators: [withKnobs],
};

export const element = () => (
  <ContainerStorybook>
    <Container className={text('ClassName', 'container')}>{text('Children', 'Content')}</Container>
  </ContainerStorybook>
);

export const Login = () => (
  <ContainerStorybook>
    <ContainerLogin
      className={text('ClassName', 'container')}
      title={text('Title', 'Title')}
      subtitle={text('Subtitle', 'Subtitle')}
    >
      {text('Children', 'Content')}
    </ContainerLogin>
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
