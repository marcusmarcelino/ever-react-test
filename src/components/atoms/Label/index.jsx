import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Label = ({ children, className, htmlFor, onClick }) => (
  <S.Label className={className} htmlFor={htmlFor} onClick={onClick}>
    {children}
  </S.Label>
);

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  onClick: PropTypes.func,
};
Label.defaultProps = {
  children: '',
  className: '',
  htmlFor: '',
  onClick: () => false,
};

export default Label;
