import styled, { css } from 'styled-components';

const iconPosition = {
  left: () => css`
    left: 0;
  `,
  right: () => css`
    right: 0;
  `,
};

export const Icon = styled.div`
  top: 0;
  ${(props) => iconPosition[props.position]}

  margin: 13px 27px 13px 24px;

  height: 25px;
  width: 25px;
`;

export const ContainerIcon = styled.div`
  display: block;
  height: 25px;
  width: 25px;

  svg {
    height: 100%;
    width: 100%;
  }
`;
