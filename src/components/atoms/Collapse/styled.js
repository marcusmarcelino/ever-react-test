import styled from 'styled-components';

import { Container as Ctn } from '../Container/styled';

import Arrow from '../../../assets/images/arrowCheckout.svg';

export const Container = styled(Ctn)`
  padding: 30px 15px;
  border-radius: 15px;

  background: #fff;

  @media (min-width: 768px) {
    padding: 30px;
  }
`;

export const ContainerTitle = styled.div`
  display: grid;
  grid-template-areas:
    'title'
    'close';
  grid-template-columns: calc(100% - 70px) 30px;

  ${(props) => (props.active ? 'margin-bottom: 30px;' : null)};

  width: 100%;
`;

export const ContainerContent = styled(Ctn)`
  height: 0;
  overflow: hidden;

  ${(props) => (props.active ? 'height: auto;' : '')};
  ${(props) => (props.active ? 'overflow: auto;' : '')};

  transition-property: height;
  transition-duration: 500ms;
  transition-timing-function: linear;
`;

export const Title = styled.h3`
  text-align: ${(props) => props.position};

  grid-area: 'title';
  align-self: center;

  width: 100%;
`;

export const Close = styled.div`
  grid-area: 'close';

  width: 100%;
  height: 100%;
  cursor: pointer;

  background: url(${Arrow}) no-repeat;
  background-size: contain;
  background-position: center;
  transform: rotate(180deg);
  transition: transform 300ms linear;

  ${(props) => (props.active ? 'transform: rotate(0);' : '')};
`;

export default Container;
