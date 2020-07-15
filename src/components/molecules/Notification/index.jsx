import React from 'react';
import PropTypes from 'prop-types';

import CardNotification from '@components/atoms/Cards/notification';
import Text from '@components/atoms/Text';

import * as S from './styled';

const Notification = ({ data }) => (
  <S.NotificationContainer>
    <S.NotificationHeader>
      <Text size="xs" variant="normal">
        marcar como lindas
      </Text>
      <Text size="xs" variant="normal">
        limpar tudo
      </Text>
    </S.NotificationHeader>

    <S.NotificationContent>
      {data.map(({ title, descTitle, descValue, data: Data, dataValue, variant }) => (
        <CardNotification
          key={Math.random() * 1500}
          title={title}
          descTitle={descTitle}
          descValue={descValue}
          data={Data}
          dataValue={dataValue}
          variant={variant}
        />
      ))}
    </S.NotificationContent>

    <S.NotificationFooter>
      <S.NotificationLink>ver mais</S.NotificationLink>
    </S.NotificationFooter>
  </S.NotificationContainer>
);

Notification.propTypes = {
  data: PropTypes.oneOf([PropTypes.array]),
};
Notification.defaultProps = {
  data: [],
};

export default Notification;
