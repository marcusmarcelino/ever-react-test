import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Status from './index';

const cardStatus = [
  {
    icon: 'saldo',
    title: 'saldo evercoins',
    description: 'em breve',
  },
  {
    icon: 'liberacao',
    title: 'aguardado liberação',
    description: 'R$ 5.200',
  },
  {
    icon: 'liberado',
    title: 'saldo liberado',
    description: 'R$ 15.200',
  },
  {
    icon: 'faturado',
    title: 'total faturado',
    description: 'R$ 10.500.200,00',
  },
];

const styles = {
  width: '100%',
  height: '100vh',
  padding: '20px',
  maxWidth: '1920px',
};

export default {
  title: 'molecules/Status',
  component: Status,
  decorators: [withKnobs],
};

export const element = () => (
  <ContainerStorybook style={styles}>
    <Status data={cardStatus} />
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
