import styled from 'styled-components';

import { Container } from '../../atoms';

import ArrowTop from '../../../assets/images/arrowTop.svg';

export const ContainerSelect = styled(Container)`
  position: relative;

  &::after {
    display: block;
    visibility: visible;
    width: 10px;
    height: 10px;

    position: absolute;
    right: 13.2px;
    top: 14px;
    z-index: 1;

    background: url(${ArrowTop}) no-repeat;
    background-size: contain;

    transform: rotate(180deg);
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  padding-left: 20px;
  position: relative;

  appearance: none;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;

  background: #fff;
  border-color: #bdbdbd;
`;

export const Option = styled.option`
  font-size: 13px;
  font-weight: normal;

  color: #5e5e5e;
`;
