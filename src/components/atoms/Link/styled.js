import styled, { css } from 'styled-components';

const typesLinks = {
  menu: () => css`
    &.active {
      width: 100%;

      background: rgba(1, 163, 255, 0.2);
      color: #01a3ff;
      &::after,
      &::before {
        content: '';
        clear: both;
        display: block;

        position: absolute;
        left: 0;
        top: 0;
      }

      &::before {
        height: 100%;
        width: 76px;
        border-bottom-right-radius: 100px;
        border-top-right-radius: 100px;

        background: #01a3ff;
      }

      svg {
        color: #fff;
      }
    }
  `,
  button: () => css`
    padding: 5px 16px;

    border-radius: 6px;

    background: #6ac9fc;
    color: #fff;
  `,
};

export const Link = styled.a`
  font-size: 16px;
  font-weight: normal;
  text-decoration: none;
  position: relative;

  display: block;

  padding: 14px 96px;

  color: #5e5e5e;

  ${(props) => typesLinks[props.type]}
`;

export const LinkIcon = styled(Link)`
  ${(props) => typesLinks[props.type]}
`;
