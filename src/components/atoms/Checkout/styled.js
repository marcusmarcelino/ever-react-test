import styled, { css } from 'styled-components';

import ButtonStyled from '@components/atoms/Button/styled';
import Button from '@components/atoms/Button';
import Ctn from '@components/atoms/Container';
import Ipt from '@components/atoms/Input';
import Lbl from '@components/atoms/Label';
import Txt from '@components/atoms/Text';

import Ecommerce from '@assets/images/ecommerce.svg';

const variants = {
  normal: () => css`
    background-color: #fff;
  `,
  resume: () => css`
    background: linear-gradient(45deg, #0077fe 40%, #7adbba 100%);
  `,
  cupom: () => css`
    background: linear-gradient(45deg, #01a3ff 40%, #83c2f5 100%);
  `,
};

export const Container = styled(Ctn)`
  border-radius: 15px;
  max-height: 230px;
  padding: 30px 15px;

  ${(props) => variants[props.variant]};

  @media (min-width: 768px) {
    max-height: 317px;
  }

  @media (min-width: 992px) {
    max-width: 751px;
  }
`;

export const ContainerResume = styled(Container)`
  min-height: 230px;
  padding-right: 23px;

  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 317px;
  }

  &::before {
    content: '';
    clear: both;
    display: block;
    visibility: visible;

    width: 146.38px;
    height: 126.02px;
    position: absolute;
    left: -5px;
    top: 60px;

    background-image: url(${Ecommerce});
    background-size: contain;
    background-repeat: no-repeat;

    @media (min-width: 768px) {
      width: 341.89px;
      height: 294.35px;

      left: 28px;
      top: 20px;
    }

    @media (min-width: 1350px) {
      width: 250px;
      height: 250px;
      left: -10px;
      top: 50px;
    }
  }

  &.resumeCheckout {
    p {
      text-align: right;
    }
  }
`;

export const ContainerResumeInfo = styled(Ctn)`
  justify-content: flex-end;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Btn = styled(ButtonStyled)`
  width: 100%;

  @media (min-width: 768px) {
    padding: 15px 0;
  }
`;

export const ButtonGroup = styled(Button.Group)`
  margin: 30px 0 0;

  @media (min-width: 768px) {
    margin-top: 49px;
  }
`;

export const Text = styled(Txt)`
  text-transform: uppercase;

  display: block;
  width: 100%;

  color: #fff;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const TextResume = styled(Text)`
  font-weight: 600;
`;

export const Label = styled(Lbl)`
  font-size: 14px;

  margin-bottom: 5px;

  @media (min-width: 768px) {
    font-size: 16px;

    margin-bottom: 7px;
  }
`;

export const Input = styled(Ipt)`
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const CheckoutTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  text-align: center;

  width: 100%;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export default Container;
