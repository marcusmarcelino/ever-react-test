import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

import * as S from './styled';

const Card = ({ className, icon, title, description }) => (
  <S.CardStatus className={`cardStatus ${className}`}>
    <S.CardStatusIcon icon={icon} className="cardStatus__icon" />

    <S.CardStatusInfo className="cardStatus__info">
      <Text size="xs" variant="light" className="cardStatus__info__title">
        {title}
      </Text>
      <Text size="md" variant="semiBold" className="cardStatus__info__description">
        {description}
      </Text>
    </S.CardStatusInfo>
  </S.CardStatus>
);

Card.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
Card.defaultProps = {
  className: 'saldo',
  icon: 'saldo',
  title: 'title',
  description: 'description',
};

export default Card;
