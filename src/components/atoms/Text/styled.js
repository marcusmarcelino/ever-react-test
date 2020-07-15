import styled, { css } from 'styled-components';

const variants = {
  normal: () => css`
    font-weight: 400;
  `,
  light: () => css`
    font-weight: 300;
  `,
  medium: () => css`
    font-weight: 500;
  `,
  semiBold: () => css`
    font-weight: 600;
  `,
  bold: () => css`
    font-weight: 800;
  `,
};

const sizes = {
  xs: () => css`
    font-size: 10px;
  `,
  sm: () => css`
    font-size: 14px;
  `,
  md: () => css`
    font-size: 18px;
  `,
  lg: () => css`
    font-size: 22px;
  `,
  xl: () => css`
    font-size: 25px;
  `,
};

export const Text = styled.p`
  ${(props) => variants[props.variant]}
  ${(props) => sizes[props.size]}
`;

export default Text;
