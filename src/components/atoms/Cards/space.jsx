import React from 'react';
import PropTypes from 'prop-types';

import Badge from '@components/atoms/Badge';

import Bank from '@assets/images/bank.svg';
import Marketing from '@assets/images/marketing.svg';
import University from '@assets/images/university.svg';
import Store from '@assets/images/shopping.svg';

import * as S from './styled';

const images = {
  bank: Bank,
  marketing: Marketing,
  university: University,
  store: Store,
  shopping: Store,
};

const CardSpace = ({ className, variant, icon, title, isComing }) => (
  <S.CardSpace variant={variant} className={className}>
    {isComing ? <Badge /> : null}
    <S.CardSpaceIcon isComing={isComing}>
      <img src={images[icon]} alt="title" />
    </S.CardSpaceIcon>
    <S.CardSpaceTitle isComing={isComing}>{title}</S.CardSpaceTitle>
  </S.CardSpace>
);

CardSpace.propTypes = {
  className: PropTypes.string,
  isComing: PropTypes.bool,
  variant: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
};
CardSpace.defaultProps = {
  className: '',
  isComing: false,
  variant: '',
  icon: '',
  title: '',
};

export default CardSpace;
