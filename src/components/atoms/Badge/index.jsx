import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Badge = ({ text }) => (
  <S.Badge>
    <S.BadgeText>{text}</S.BadgeText>
  </S.Badge>
);

Badge.propTypes = {
  text: PropTypes.string,
};
Badge.defaultProps = {
  text: 'em breve!',
};

export default Badge;
