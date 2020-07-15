import React, { useState } from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Input from './index';

export default {
  title: 'atoms/Input',
  component: Input,
  decorators: [withKnobs],
};

const types = ['text', 'email', 'phone', 'tel', 'password'];

export const element = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);

  return (
    <ContainerStorybook>
      <Input
        value={value}
        onChange={handleChange}
        type={select('Type Input', types, 'text')}
        disabled={select('Disable Input', [true, false], false)}
        variant={select('Variant', ['', 'login'], '')}
      />
    </ContainerStorybook>
  );
};

element.story = {
  name: 'Default',
};
