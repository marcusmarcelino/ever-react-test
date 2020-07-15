import React from 'react';
import PropTypes from 'prop-types';

import Text from '@components/atoms/Text';

import * as S from './styled';

const Purchase = ({ className, icon, title, variant, value, discount }) => (
  <S.CardPurchase className={`purchase ${className}`} variant={variant}>
    <S.CardPurchaseIcon icon={icon} className="purchase__icon" />

    <S.CardPurchaseInfo className="purchase__info">
      <Text size="xs" variant="light" className="purchase__info__title">
        {title}
      </Text>
      <Text size="md" variant="semiBold" className="purchase__info__value">
        {value || discount}
      </Text>
    </S.CardPurchaseInfo>
  </S.CardPurchase>
);

Purchase.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.string,
  value: PropTypes.string,
  discount: PropTypes.string,
};
Purchase.defaultProps = {
  className: '',
  icon: '',
  title: '',
  variant: '',
  value: '',
  discount: '',
};

export default Purchase;
