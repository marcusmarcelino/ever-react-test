import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';

import * as S from './styled';

const Checkout = ({ className, dataInput, title, label, btnText }) => (
  <S.Container className={`createCheckout ${className}`} variant="normal">
    <S.CheckoutTitle>{title}</S.CheckoutTitle>

    <Container>
      <S.Label>{label}</S.Label>
      <S.Input
        id={dataInput.id}
        name={dataInput.name}
        onChange={dataInput.onChange}
        placeholder={dataInput.placeholder}
        type={dataInput.type}
        value={dataInput.value}
      />
    </Container>

    <S.ButtonGroup className="center">
      <S.Btn variant="primary" onClick={dataInput.onClick}>
        <S.Text size="sm" variant="medium">
          {btnText}
        </S.Text>
      </S.Btn>
    </S.ButtonGroup>
  </S.Container>
);

Checkout.propTypes = {
  className: PropTypes.string,
  dataInput: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
  }),
  btnText: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
};
Checkout.defaultProps = {
  className: '',
  dataInput: {},
  btnText: '',
  title: '',
  label: '',
};

export default Checkout;
