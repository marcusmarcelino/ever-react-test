import styled, { css } from 'styled-components';

import Btn from '@components/atoms/Button';

import CommisionWhite from '@assets/images/commision_white.svg';
import Discount from '@assets/images/discount.svg';
import Saldo from '@assets/images/saldo.svg';
import Faturado from '@assets/images/faturado.svg';
import Liberacao from '@assets/images/liberacao.svg';
import Liberado from '@assets/images/liberado.svg';
import Bank from '@assets/images/bank.svg';
import Shopping from '@assets/images/shopping.svg';
import Marketing from '@assets/images/marketing.svg';
import University from '@assets/images/university.svg';

const images = {
  commision: () => css`
    background: url(${CommisionWhite});
  `,
  discount: () => css`
    background: url(${Discount});
  `,
  saldo: () => css`
    background: url(${Saldo});
  `,
  faturado: () => css`
    background: url(${Faturado});
  `,
  liberacao: () => css`
    background: url(${Liberacao});
  `,
  liberado: () => css`
    background: url(${Liberado});
  `,
  bank: () => css`
    background: url(${Bank});
  `,
  shopping: () => css`
    background: url(${Shopping});
  `,
  marketing: () => css`
    background: url(${Marketing});
  `,
  university: () => css`
    background: url(${University});
  `,
};
const variants = {
  bank: () => css`
    background: linear-gradient(-143deg, #000 45%, #fff);
  `,
  shopping: () => css`
    background: linear-gradient(-143deg, #000 45%, #fff);
  `,
  marketing: () => css`
    background: linear-gradient(-143deg, #28bc8f 45%, #6aff6f);
  `,
  university: () => css`
    background: linear-gradient(-143deg, #1289e3 45%, #3ce9e9);
  `,
  discount: () => css`
    background: linear-gradient(-143deg, #9355d9 45%, #e351d0);
  `,
  commision: () => variants.marketing,
};

const colorVariantNotification = {
  success: () => css`
    color: #2fdf46;
  `,
  info: () => css`
    color: #2fdfd3;
  `,
  infoDark: () => css`
    color: #1590e3;
  `,
  warning: () => css`
    color: #f6b546;
  `,
  danger: () => css`
    color: #f14479;
  `,
  ever: () => css`
    color: #ff7f00;
  `,
  partner: () => css`
    color: #9655d9;
  `,
};
const bgVariantNotification = {
  success: () => css`
    background: #2fdf46;
  `,
  info: () => css`
    background: #2fdfd3;
  `,
  infoDark: () => css`
    background: #1590e3;
  `,
  warning: () => css`
    background: #f6b546;
  `,
  danger: () => css`
    background: #f14479;
  `,
  ever: () => css`
    background: #ff7f00;
  `,
  partner: () => css`
    background: #9655d9;
  `,
};

export const CardStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 100px;
  max-width: 365px;
  width: 100%;

  padding: 10px 21px;
  border-radius: 15px;

  background: #fff;

  @media (min-width: 768px) {
    max-width: 300px;
  }

  @media (min-width: 1500px) {
    max-width: 360px;
  }
`;

export const CardStatusIcon = styled.div`
  height: 50px;
  width: 50px;

  ${(props) => images[props.icon]}
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 375px) {
    height: 70px;
    width: 70px;
  }

  @media (min-width: 992px) {
    height: 80px;
    width: 80px;
  }
`;

export const CardStatusInfo = styled.div`
  display: flex;
  flex-direction: column;

  p {
    text-align: right;
  }

  .cardStatus__info__title {
    text-transform: uppercase;
    color: #5e5e5e;
  }
  .cardStatus__info__description {
    color: #404040;
  }

  @media (min-width: 992px) {
    .cardStatus__info__title {
      font-size: 14px;
    }
    .cardStatus__info__description {
      font-size: 25px;
    }
  }
`;

export const CardSpace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 27px 20px 27px;
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  margin: 5px;

  ${(props) => (props.variant ? variants[props.variant] : 'background: #E1DEDE;')}

  @media (min-width: 768px) {
    max-width: 270px;
  }

  @media (min-width: 1980px) {
    max-width: 300px;
  }
`;

export const CardSpaceIcon = styled.div`
  height: 50px;
  width: 50px;

  ${(props) => (props.isComing ? 'opacity: 0.5;' : '')}

  @media (min-width: 768px) {
    height: 70px;
    width: 70px;
  }
`;

export const CardSpaceTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;

  margin-top: 10px;
  width: 100%;

  ${(props) => (props.isComing ? 'opacity: 0.5;' : '')}

  color: #fff;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const CardNotification = styled.div`
  padding: calc(75px / 5);

  width: 100%;

  background: #fff;
`;

export const CardNotificationTitle = styled.h4`
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;

  ${(props) => colorVariantNotification[props.variant]}
`;

export const CardNoticiationDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .cardNotification__description {
    &__title,
    &__value {
      font-size: 15px;
    }
  }

  .cardNotification__info {
    &__data,
    &__value {
      font-size: 12px;
    }
  }
`;

export const CardPurchase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-height: 102px;
  min-height: 80px;
  max-width: 750px;
  height: 100%;
  width: 100%;

  padding: 0 25px;

  border-radius: 15px;

  ${(props) => (props.variant ? variants[props.variant] : 'background: #E1DEDE;')}
`;

export const CardPurchaseIcon = styled.div`
  height: 50px;
  width: 50px;

  ${(props) => images[props.icon]}
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 768px) {
    height: 70px;
    width: 70px;
  }
`;

export const CardPurchaseInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;

  p {
    text-align: right;
    width: 100%;
    color: #fff;
  }

  .purchase__info__title {
    text-transform: uppercase;
  }
`;

export const CardSale = styled(CardSpace)`
  cursor: pointer;
  max-width: 700px !important;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    max-width: 270px !important;
  }

  @media (min-width: 1980px) {
    max-width: 300px !important;
  }

  ${(props) => bgVariantNotification[props.variant]}
`;

export const CardSaleTitle = styled.p`
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;

  ${(props) => (props.isComing ? 'opacity: 0.5;' : null)}

  color: #fff;

  @media (min-width: 768px) {
    font-size: 17px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 330px;
  width: 100%;

  border-radius: 15px;

  background: #fff;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding: 20px 0;
  }

  @media (min-width: 992px) {
    padding: 105px 0;
  }
`;

export const ProfileImage = styled.div`
  max-height: 140px;
  max-width: 140px;
  height: 100%;
  width: 100%;

  margin-bottom: 10px;

  border-radius: 300px;
  overflow: hidden;

  @media (min-width: 768px) {
    max-height: 230px;
    max-width: 230px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    max-width: 40%;
    margin-left: 60px;
  }
`;

export const ProfileName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  text-align: center;

  width: 100%;

  @media (min-width: 768px) {
    text-align: left;
  }

  @media (min-width: 1024px) {
    font-size: 25px;
  }
`;

export const ProfileWork = styled.h4`
  font-size: 12px;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;

  margin-bottom: 45px;
  width: 100%;

  @media (min-width: 768px) {
    text-align: left;

    margin-bottom: 10px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

export const ProfileText = styled.p`
  font-size: 12px;
  font-weight: normal;
  text-align: center;

  width: 100%;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

export const Button = styled(Btn)``;

export const ButtonGroup = styled(Btn.Group)`
  margin: 0;
  margin-top: 45px;

  button:not(:last-child) {
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    flex-direction: column;

    margin-top: 30px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;

    margin-top: 30px;
    width: 70%;
  }

  @media (min-width: 1366px) {
    width: 70%;
  }
`;
