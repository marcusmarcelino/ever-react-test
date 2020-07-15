import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Welcome from './index';
import WelcomeEcommerce from './ecommerce';
import Banner from './banner';

export default {
  title: 'molecules/Welcome',
  component: Welcome,
  decorators: [withKnobs],
};

export const element = () => (
  <ContainerStorybook>
    <Welcome msg="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
  </ContainerStorybook>
);

export const Ecommerce = () => (
  <ContainerStorybook style={{ width: '100%', margin: 0 }}>
    <WelcomeEcommerce link="https://loja.everbynature.com.br?me=1" />
  </ContainerStorybook>
);

const stylesBanner = {
  width: '100%',
  height: '100vh',
  padding: '20px',
  maxWidth: '1920px',
};

export const Empreendedores = () => (
  <ContainerStorybook style={stylesBanner}>
    <Banner
      link={text('Link', 'Banner')}
      image={text('Image', 'Banner')}
      title={text('Title', 'Banner')}
      openModalVideo={() => {}}
      activeToast={() => {}}
    />
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
