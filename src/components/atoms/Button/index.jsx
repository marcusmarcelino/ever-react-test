import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Button = ({ children, variant, showIcon, icon, onClick }) => (
  <S.Button variant={variant} showIcon={showIcon} icon={icon} onClick={onClick}>
    {children}
  </S.Button>
);

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.string,
  showIcon: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  variant: '',
  children: '',
  showIcon: false,
  icon: '',
  onClick: () => false,
};

Button.Group = S.ButtonGroup;

export default Button;
