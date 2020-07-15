import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const SampleExpandedComponent = ({ data }) => (
  <S.SampleStyle>
    <li>
      <p>Validade</p>
      <p>{data.username}</p>
    </li>
    <li>
      <p>Restam</p>
      <p>{data.name}</p>
    </li>
    <li>
      <p>Conversão</p>
      <p>{data.username}</p>
    </li>
  </S.SampleStyle>
);

SampleExpandedComponent.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array]),
};
SampleExpandedComponent.defaultProps = {
  data: [],
};

export default SampleExpandedComponent;
