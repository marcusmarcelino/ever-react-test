import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../../assets/images/LogoEVER.svg';

import * as S from './styled';

const Logo = ({ size }) => (
  <S.Container>
    <S.Logo size={size}>
      <img src={logo} alt="logo" />
    </S.Logo>
  </S.Container>
);

Logo.propTypes = {
  size: PropTypes.PropTypes.string.isRequired,
};

export default Logo;
