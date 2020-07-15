import React from 'react';
import PropTypes from 'prop-types';

import Text from '@components/atoms/Text';

import * as S from './styled';

const CardNotification = ({ className, title, descTitle, descValue, data, dataValue, variant }) => (
  <S.CardNotification className={`cardNotification ${className}`}>
    <S.CardNotificationTitle variant={variant}>{title}</S.CardNotificationTitle>

    <S.CardNoticiationDescription className="cardNotification__description">
      <Text size="sm" variant="semiBold" className="cardNotification__description__title">
        {descTitle}
      </Text>
      {descValue && (
        <Text size="sm" variant="semiBold" className="cardNotification__description__value">
          {descValue}
        </Text>
      )}
    </S.CardNoticiationDescription>

    <S.CardNoticiationDescription className="cardNotification__info">
      <Text size="xs" variant="light" className="cardNotification__description__info__data">
        {data}
      </Text>
      {dataValue && (
        <Text size="xs" variant="light" className="cardNotification__description__info__value">
          {dataValue}
        </Text>
      )}
    </S.CardNoticiationDescription>
  </S.CardNotification>
);

CardNotification.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  descTitle: PropTypes.string,
  descValue: PropTypes.string,
  data: PropTypes.string,
  dataValue: PropTypes.string,
  variant: PropTypes.string,
};
CardNotification.defaultProps = {
  className: '',
  title: 'Title',
  descTitle: 'Description',
  descValue: 'Value',
  data: '00/00/0000 as 00:00',
  dataValue: 'n° 000 000',
  variant: '',
};

export default CardNotification;
