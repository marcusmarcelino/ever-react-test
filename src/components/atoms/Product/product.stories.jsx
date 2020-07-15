import React from 'react';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Product from './index';

export default {
  title: 'atoms/Product',
  component: Product,
  decorators: [withKnobs],
};

const style = {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  padding: '20px 0',
};

export const element = () => (
  <ContainerStorybook style={style}>
    <Product
      title={text('Title', 'Fish oil')}
      srcImg={text(
        'Product Image',
        'https://www.dollargeneral.com/media/catalog/product/cache/0729a8e318a86bbdd225c6c8aa5967a3/r/e/rexall_omega-3_fish_oil_1000mg_300mg_epa_and_dha_50ct_101250102.jpg'
      )}
      nameImg={text('Alt Image', 'fish oil')}
      valueProduct={text('Value Product', '79,00')}
      valueCommision={text('Commision Product', '31,00')}
      urlProduct={text('URL of Product', '#')}
      purchase={select('Adquirir Produto', [true, false], false)}
      product={select('Meu Ecommerce', [true, false], false)}
    />
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
