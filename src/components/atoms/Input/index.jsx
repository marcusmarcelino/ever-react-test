import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Input = ({
  className,
  disabled,
  id,
  name,
  onBlur,
  onChange,
  placeholder,
  type,
  value,
  variant,
  errorMessage,
}) => (
  <S.InputContainer>
    <S.Input
      type={type}
      id={id}
      className={className}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      variant={variant}
    />

    {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
  </S.InputContainer>
);

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.string,
  errorMessage: PropTypes.string,
};
Input.defaultProps = {
  className: '',
  disabled: false,
  id: '',
  name: '',
  onChange: () => false,
  onBlur: () => false,
  placeholder: 'input default',
  type: 'text',
  value: '',
  variant: '',
  errorMessage: '',
};

export default Input;
