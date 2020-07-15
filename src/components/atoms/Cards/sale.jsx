import React from 'react';
import PropTypes from 'prop-types';

import Badge from '@components/atoms/Badge';

import * as S from './styled';

const Sale = ({ text, variant, isComing, onClick }) => (
  <S.CardSale variant={variant} onClick={onClick}>
    {isComing ? <Badge /> : null}
    <S.CardSaleTitle isComing={isComing}>{text}</S.CardSaleTitle>
  </S.CardSale>
);

Sale.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  isComing: PropTypes.bool,
  onClick: PropTypes.func,
};
Sale.defaultProps = {
  text: '',
  variant: '',
  isComing: false,
  onClick: () => false,
};

export default Sale;
