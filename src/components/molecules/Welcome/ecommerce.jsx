import React from 'react';
import PropTypes from 'prop-types';

import Button from '@components/atoms/Button';

import * as S from './styled';

const WelcomeEcommerce = ({ link }) => (
  <S.WelcomeEcommerce image="ecommerce">
    <S.WelcomeEcommerceContainer>
      <div className="ecommerce__title">
        <S.WelcomeEcommerceTitle>Loja Completa</S.WelcomeEcommerceTitle>
      </div>

      <div className="ecommerce__link">
        <S.WelcomeEcommerceText size="sm" variant="normal">
          {link}
        </S.WelcomeEcommerceText>
      </div>

      <S.WelcomeEcommerceButtonGroup>
        <Button variant="dark">Copy</Button>
        <Button variant="dark">Compatilhar</Button>
      </S.WelcomeEcommerceButtonGroup>
    </S.WelcomeEcommerceContainer>
  </S.WelcomeEcommerce>
);

WelcomeEcommerce.propTypes = {
  link: PropTypes.string,
};
WelcomeEcommerce.defaultProps = {
  link: '',
};

export default WelcomeEcommerce;
