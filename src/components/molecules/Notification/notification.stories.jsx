import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Notification from './index';

export default {
  title: 'molecules/Notification',
  component: Notification,
  decorators: [withKnobs],
};

const cards = [
  {
    title: 'venda',
    descTitle: 'comissão',
    descValue: 'R$ 300,00',
    data: '03/03/2020 as 16:33',
    dataValue: 'n° 255 966',
    variant: 'success',
  },
  {
    title: 'indicação',
    descTitle: 'comissão',
    descValue: 'R$ 350,00',
    data: '03/03/2020 as 16:23',
    dataValue: 'n° 255 966',
    variant: 'info',
  },
  {
    title: 'curso',
    descTitle: 'otimizando vendas no Instagram e Facebook',
    descValue: '',
    data: '',
    dataValue: '',
    variant: 'infoDark',
  },
  {
    title: 'novidade ever',
    descTitle: 'shopping ever',
    descValue: '',
    data: '',
    dataValue: '',
    variant: 'danger',
  },
  {
    title: 'live ever',
    descTitle: 'Live com CEO Amanda Sotta',
    descValue: '',
    data: 'Amanhã dia 04/03/2020 as 16:23',
    dataValue: '',
    variant: 'ever',
  },
  {
    title: 'saque',
    descTitle: 'Depósito em conta',
    descValue: 'R$ 850,00',
    data: '03/03/2020 as 16:23',
    dataValue: 'n° 255 966',
    variant: 'warning',
  },
  {
    title: 'novo parceiro',
    descTitle: 'Salão Girassol',
    descValue: '',
    data: '03/03/2020 as 16:23',
    dataValue: '',
    variant: 'partner',
  },
];

export const element = () => (
  <ContainerStorybook style={{ padding: '10px' }}>
    <Notification data={cards} />
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
