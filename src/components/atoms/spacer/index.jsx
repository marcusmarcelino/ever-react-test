import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Spacer = ({ size }) => <S.Spacer size={size} />;

Spacer.propTypes = {
  size: PropTypes.string.isRequired,
};

export default Spacer;
