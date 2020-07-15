import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Button from '@components/atoms/Button';
import Text from '@components/atoms/Text';

import WelcomeIcon from '@assets/images/welcome.svg';
import WelcomeEcommerceIcon from '@assets/images/imagem_ecommerce.svg';
import Entrepreneurs from '@assets/images/entrepreneurs.svg';
import EntrepreneursMobile from '@assets/images/entrepreneursMobile.svg';

const images = {
  welcome: () => css`
    background: url(${WelcomeIcon}) no-repeat;
  `,
  ecommerce: () => css`
    background: url(${WelcomeEcommerceIcon}) no-repeat;
  `,
  entrepreneurs: () => css`
    background: url(${Entrepreneurs}) no-repeat;
  `,
  entrepreneursMobile: () => css`
    background: url(${EntrepreneursMobile}) no-repeat;
  `,
};

export const Container = styled.div`
  padding: 25px 22px 112px 22px;
  position: relative;

  border-radius: 15px;

  background: linear-gradient(to bottom, #0dbafb, #2551e1);

  &::after {
    content: '';
    clear: both;
    display: block;
    visibility: visible;
    position: absolute;
    z-index: 1;

    height: 160px;
    width: 180px;
    right: 71.2px;
    bottom: -25px;

    ${(props) => images[props.image]}
    background-size: contain;
  }
`;

export const Welcome = styled(Container)`
  p {
    color: #fff;
  }

  .welcome__container {
    position: relative;
    z-index: 9;
  }
  .welcome__title {
    font-weight: 500;

    margin-top: 0;
    margin-bottom: 10px;
  }
  .welcome__description {
    font-size: 13px;
    font-weight: 300;

    margin-bottom: 20px;
    max-width: 800px;
    width: 100%;
  }

  .welcome__author {
    display: none;
  }

  &::after {
    @media (min-width: 414px) {
      right: 115px;
    }

    @media (min-width: 768px) {
      height: 190px;
      width: 250px;

      bottom: -15px;
      right: -10px;
    }

    @media (min-width: 834px) {
      height: 200px;
      width: 270px;

      bottom: -13px;
    }

    @media (min-width: 1200px) {
      height: 340.65px;
      width: 420.53px;
      right: 25px;
      bottom: -25px;
    }
  }

  @media (min-width: 768px) {
    padding-bottom: 30px;

    .welcome__description {
      width: 70%;
    }

    .welcome__author {
      display: block;
    }
  }

  @media (min-width: 834px) {
    padding-bottom: 40px;

    .welcome__title {
      font-size: 32px;
    }
    .welcome__description {
      font-size: 18px;
    }
  }

  @media (min-width: 1200px) {
    margin-top: 149px;
    padding-bottom: 32px;
    padding-left: 90px;
    padding-top: 32px;
  }
`;

export const WelcomeEcommerce = styled(Container)`
  display: flex;
  align-items: center;

  &::after {
    @media (min-width: 414px) {
      right: 0;
      bottom: 0;
      height: 250px;
      width: 350px;
    }
  }
`;

export const WelcomeEcommerceContainer = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;

    .ecommerce__title {
      width: 100%;
    }

    .ecommerce__link {
      margin-right: 20px;
    }
  }
`;

export const WelcomeEcommerceButtonGroup = styled(Button.Group)`
  padding: 0;

  button:first-child {
    margin-bottom: 10px;

    @media (min-width: 414px) {
      margin-bottom: 0;
      margin-right: 10px;
    }

    @media (min-width: 1024px) {
      margin-left: 20px;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;

    width: 45%;
  }
`;

export const WelcomeEcommerceTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;

  margin-bottom: 10px;

  color: #fff;
`;

export const WelcomeEcommerceText = styled(Text)`
  color: #fff;
`;

export const WelcomeEcommerceCopy = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background: orange;
`;

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 30px 40px;
  margin-bottom: 10px;
  height: 150px;
  margin: 0 auto;

  border-radius: 15px;
  position: relative;

  background: linear-gradient(to bottom, #0dbafb, #2551e1);

  &::after {
    content: '';
    clear: both;
    display: block;
    visibility: visible;

    height: 200px;
    width: 350px;

    position: absolute;
    right: 0;
    bottom: 0;
    top: -30px;
    opacity: 1;
    z-index: 1;

    ${(props) => images[props.image]}
    background-size: contain;
  }

  &::after {
    @media (min-width: 1300px) {
      height: 250px;
    }

    @media (max-width: 1050px) {
      top: 10px;
    }

    @media (max-width: 720px) {
      height: 105px;
      width: 167px;
      top: 110px;
      ${(props) => props.imageMobile && images.entrepreneursMobile}
    }
  }

  @media (max-width: 1050px) {
    padding: 30px 20px;
    height: 250px;
    width: 100%;
  }
`;

export const BannerContent = styled.div`
  div {
    display: flex;
    align-items: center;

    @media (max-width: 991px) {
      div {
        margin-top: 50px;
      }
    }

    @media (max-width: 1200px) {
      display: block;

      div {
        margin-top: 10px;
      }
    }

    @media (min-width: 1300px) {
      p {
        margin-right: 50px;
      }
    }

    @media (max-width: 991px) {
      div {
        margin-top: 50px;
      }
    }
  }
`;

export const BannerContentVideo = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 2;
`;

export const BannerTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;

  display: block;
  margin-bottom: 10px;

  color: #fff;
`;

export const BannerLinkText = styled(Text)`
  display: block;
  flex: 1;

  color: #fff;
`;

export const BannerButtonGroup = styled.div`
  padding: 0;
  display: flex;

  button {
    transition: background-color 0.2s;
    z-index: 2;

    @media (max-width: 1050px) {
      display: block;
      margin-top: 10px;
    }
  }

  button:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }

  button:hover {
    background: ${shade(0.2, '#1045d4')};
  }

  button:first-child {
    margin-bottom: 10px;

    @media (min-width: 414px) {
      margin-bottom: 0;
      margin-right: 10px;
    }

    @media (min-width: 1024px) {
      margin-left: 10px;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
