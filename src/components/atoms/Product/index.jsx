import React from 'react';
import PropTypes from 'prop-types';

import Text from '@components/atoms/Text';

import Copy from '@assets/images/copy.svg';
import Share from '@assets/images/share.svg';

import * as S from './styled';

const Product = ({ title, srcImg, nameImg, valueProduct, valueCommision, urlProduct, purchase, product }) => (
  <S.Product className="product">
    <S.ProductContainer className="product__container">
      <S.ProductTitle>{title}</S.ProductTitle>

      <S.ProductImage className="product__image">
        <img src={srcImg} alt={nameImg} />
      </S.ProductImage>

      <S.ProductValues className="product__value">
        {!purchase && <Text size="sm">Preço de venda:</Text>}
        {purchase && <Text size="sm">Preço:</Text>}
        <Text size="sm">
          R$
          {` ${valueProduct}`}
        </Text>
      </S.ProductValues>

      {!purchase && (
        <S.ProductValues className="product__commision">
          <Text size="sm" variant="semiBold">
            Comissão:
          </Text>
          <Text size="sm">
            R$
            {` ${valueCommision}`}
          </Text>
        </S.ProductValues>
      )}
    </S.ProductContainer>

    {product && (
      <S.ProducInfo className="product__info">
        <div>
          <S.ProductLink type="button" href="https://google.com" alt="conheça melhor">
            Conheça melhor
          </S.ProductLink>
        </div>
        <div>
          <S.ProductTextClick size="xs" variant="bold" onClick={() => console.log(urlProduct)}>
            <img src={Copy} alt="copy to clipboard" />
          </S.ProductTextClick>

          <S.ProductTextClick size="xs" variant="bold" onClick={() => console.log('share product')}>
            <img src={Share} alt="share product" />
          </S.ProductTextClick>
        </div>
      </S.ProducInfo>
    )}
  </S.Product>
);

Product.propTypes = {
  title: PropTypes.string,
  srcImg: PropTypes.string,
  nameImg: PropTypes.string,
  valueProduct: PropTypes.string,
  valueCommision: PropTypes.string,
  urlProduct: PropTypes.string,
  purchase: PropTypes.bool,
  product: PropTypes.bool,
};
Product.defaultProps = {
  title: 'Title',
  srcImg: '',
  nameImg: 'fish oil',
  valueProduct: 79,
  valueCommision: 31,
  urlProduct: '',
  purchase: false,
  product: false,
};

export default Product;
