import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import LoginForm from './Login';
import ForgotPassForm from './ForgotPass';

export default {
  title: 'molecules/Forms',
  component: LoginForm,
  decorators: [withKnobs],
};

export const element = () => (
  <ContainerStorybook>
    <LoginForm redirectTo={text('Redirect', '/termBR')} />
  </ContainerStorybook>
);

export const Login = () => (
  <ContainerStorybook>
    <ForgotPassForm />
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
