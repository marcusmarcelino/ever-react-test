import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const CheckoutResume = ({ className, cupom, data, variant }) => (
  <S.ContainerResume className={`resumeCheckout ${className}`} variant={variant}>
    <S.ContainerResumeInfo>
      <S.ContainerText>
        <S.Text>{cupom ? 'cupons ativos' : 'carrinhos ativos'}</S.Text>
        <S.TextResume>{data.total}</S.TextResume>
      </S.ContainerText>

      <S.ContainerText>
        <S.Text>{cupom ? 'vendas com cupons' : 'vendas com carrinhos'}</S.Text>
        <S.TextResume>{data.sales}</S.TextResume>
      </S.ContainerText>

      <S.ContainerText>
        <S.Text>{cupom ? 'ganhos com cupons' : 'ganhos com carrinhos'}</S.Text>
        <S.TextResume>{data.gains}</S.TextResume>
      </S.ContainerText>
    </S.ContainerResumeInfo>
  </S.ContainerResume>
);

CheckoutResume.propTypes = {
  className: PropTypes.string,
  cupom: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape),
  variant: PropTypes.string,
};
CheckoutResume.defaultProps = {
  className: '',
  cupom: '',
  data: [],
  variant: '',
};

export default CheckoutResume;
