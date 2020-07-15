import React from 'react';
import PropTypes from 'prop-types';

import Product from '@components/atoms/Product';

import * as S from './styled';

const Products = ({ data, page }) => (
  <S.ProductsContainer type={page}>
    {console.log(data)}
    {data.map(({ title, srcImg, nameImg, valueProduct, valueCommision, urlProduct, purchase, product }) => (
      <Product
        key={Math.random() * 1000}
        title={title}
        srcImg={srcImg}
        nameImg={nameImg}
        valueProduct={valueProduct}
        valueCommision={valueCommision}
        urlProduct={urlProduct}
        purchase={purchase}
        product={product}
      />
    ))}
  </S.ProductsContainer>
);

Products.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array]),
  page: PropTypes.string,
};
Products.defaultProps = {
  data: '',
  page: 'ecommerce',
};

export default Products;
