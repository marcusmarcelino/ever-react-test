import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Products from './index';

export default {
  title: 'molecules/Products',
  component: Products,
  decorators: [withKnobs],
};

const products = [
  {
    title: 'Fish Oil',
    srcImg:
      'https://www.dollargeneral.com/media/catalog/product/cache/0729a8e318a86bbdd225c6c8aa5967a3/r/e/rexall_omega-3_fish_oil_1000mg_300mg_epa_and_dha_50ct_101250102.jpg',
    nameImg: 'fish oil',
    valueProduct: '79,00',
    valueCommision: '31,00',
    urlProduct: '#',
    product: true,
  },
  {
    title: 'Lustros',
    srcImg:
      'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=594610-847__1&recipeName=350',
    nameImg: 'lustros',
    valueProduct: '117,00',
    valueCommision: '50,00',
    urlProduct: '#',
  },
  {
    title: 'Vibrant',
    srcImg:
      'https://www.dollargeneral.com/media/catalog/product/cache/0729a8e318a86bbdd225c6c8aa5967a3/r/e/rexall_omega-3_fish_oil_1000mg_300mg_epa_and_dha_50ct_101250102.jpg',
    nameImg: 'vibrant',
    valueProduct: '90,00',
    valueCommision: '40,00',
    urlProduct: '#',
    product: true,
  },
  {
    title: 'Maxberry',
    srcImg:
      'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=594610-847__1&recipeName=350',
    nameImg: 'maxberry',
    valueProduct: '94,00',
    valueCommision: '45,00',
    urlProduct: '#',
  },
  {
    title: 'Fish Oil',
    srcImg:
      'https://www.dollargeneral.com/media/catalog/product/cache/0729a8e318a86bbdd225c6c8aa5967a3/r/e/rexall_omega-3_fish_oil_1000mg_300mg_epa_and_dha_50ct_101250102.jpg',
    nameImg: 'fish oil',
    valueProduct: '79,00',
    valueCommision: '31,00',
    urlProduct: '#',
  },
  {
    title: 'Lustros',
    srcImg:
      'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=594610-847__1&recipeName=350',
    nameImg: 'lustros',
    valueProduct: '117,00',
    valueCommision: '50,00',
    urlProduct: '#',
  },
  {
    title: 'Vibrant',
    srcImg:
      'https://www.dollargeneral.com/media/catalog/product/cache/0729a8e318a86bbdd225c6c8aa5967a3/r/e/rexall_omega-3_fish_oil_1000mg_300mg_epa_and_dha_50ct_101250102.jpg',
    nameImg: 'vibrant',
    valueProduct: '90,00',
    valueCommision: '40,00',
    urlProduct: '#',
  },
  {
    title: 'Maxberry',
    srcImg:
      'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=594610-847__1&recipeName=350',
    nameImg: 'maxberry',
    valueProduct: '94,00',
    valueCommision: '45,00',
    urlProduct: '#',
  },
  {
    title: 'Vibrant',
    srcImg:
      'https://www.dollargeneral.com/media/catalog/product/cache/0729a8e318a86bbdd225c6c8aa5967a3/r/e/rexall_omega-3_fish_oil_1000mg_300mg_epa_and_dha_50ct_101250102.jpg',
    nameImg: 'vibrant',
    valueProduct: '90,00',
    valueCommision: '40,00',
    urlProduct: '#',
  },
  {
    title: 'Maxberry',
    srcImg:
      'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=594610-847__1&recipeName=350',
    nameImg: 'maxberry',
    valueProduct: '94,00',
    valueCommision: '45,00',
    urlProduct: '#',
  },
];

export const element = () => (
  <ContainerStorybook style={{ padding: '10px' }}>
    <Products data={products} page={select('Page', ['ecommerce', 'purchase'], 'ecommerce')} />
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
