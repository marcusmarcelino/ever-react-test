import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Text = ({ className, children, size, variant, onClick }) => (
  <S.Text variant={variant} size={size} className={className} onClick={onClick}>
    {children}
  </S.Text>
);

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  size: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};
Text.defaultProps = {
  className: '',
  size: 'sm',
  children: '',
  variant: 'normal',
  onClick: () => false,
};

export default Text;
