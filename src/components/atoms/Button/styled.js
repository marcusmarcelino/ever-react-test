import styled, { css } from 'styled-components';

import IconCopy from '../../../assets/images/copyWhite.svg';
import IconShare from '../../../assets/images/shareWhite.svg';
import IconTrash from '../../../assets/images/trash.svg';
import IconArrowRight from '../../../assets/images/arrowRight.svg';
import IconWhatsApp from '../../../assets/images/WhatsApp_White.svg';
import IconEmail from '../../../assets/images/e-mail-white.svg';

const variants = {
  primary: () => css`
    background: #ff7f00;
  `,
  secondary: () => css`
    background: #01a3ff;
  `,
  dark: () => css`
    background: #1045d4;
  `,
  success: () => css`
    background: #2fdf46;
  `,
  disabled: () => css`
    background: #bdbdbd;
    pointer-events: none;
  `,
};
const icons = {
  copy: () => css`
    background: url(${IconCopy}) no-repeat;
  `,
  share: () => css`
    background: url(${IconShare}) no-repeat;
  `,
  trash: () => css`
    background: url(${IconTrash}) no-repeat;
  `,
  arrowRight: () => css`
    background: url(${IconArrowRight}) no-repeat;
  `,
  whats: () => css`
    background: url(${IconWhatsApp}) no-repeat;
  `,
  email: () => css`
    background: url(${IconEmail}) no-repeat;
  `,
};
const showIcon = () => css`
  padding-right: 40px;

  &::after {
    content: '';
    clear: both;
    display: block;
    visibility: visible;

    position: absolute;
    right: 8px;
    top: 6px;
    height: 25px;
    width: 25px;
  }
`;

export const Button = styled.button`
  font-size: 18px;
  text-transform: uppercase;
  
  cursor: pointer;

  min-height: 38px;

  border: none;
  border-radius: 15px;
  padding: 8px 24px;
  position: relative;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  cursor: pointer;

  color: #fff;
  ${(props) => variants[props.variant]}
  ${(props) => (props.showIcon ? showIcon : '')}
  
  &::after {
    ${(props) => icons[props.icon]}
    ${(props) => (props.icon === 'arrowRight' ? 'right: -1px; top: 10px; width: 20px;' : '')}
    ${(props) => (props.icon === 'share' ? 'top: 6px;' : '')}
    background-size: contain;
  }

  @media (min-width: 992px) {
    padding: 8px 32px;
  }
`;

export const ButtonCopy = styled(Button)`
  border-radius: 0;
  box-shadow: none;

  background: none;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;

  margin: 25px 0;
  width: 100%;

  &.start {
    justify-content: flex-start;
  }
  &.center {
    justify-content: center;
  }
  &.end {
    justify-content: flex-end;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    width: 100%;
  }
`;

export default Button;
