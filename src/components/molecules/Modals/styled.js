import styled from 'styled-components';

import Text from '@components/atoms/Text';

export const Modal = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100vh;

  position: fixed;
  left: 0;
  top: 0;
  overflow: auto;
  z-index: 999;

  box-shadow: 0 3px 26px rgba(0, 0, 0, 0.3);
  background: #ffffff;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.div`
  display: inline-table;

  width: 85%;
  height: auto;
  padding: 30px 50px;
  margin: 20px 0 20px 0;

  border-radius: 20px;
  z-index: 2;

  background: #ffffff;
  color: #5e5e5e;

  span {
    margin-left: 10px;
  }

  @media (max-width: 992px) {
    padding: 30px;
  }
`;

export const ModalBody = styled.div`
  height: auto;
  margin-top: 30px;

  @media (max-width: 992px) {
    margin: 40px 0px 10px 0px;
  }
`;

export const ModalHeader = styled.header`
  h3 {
    font-size: 14px;
    font-weight: 600;
    text-align: center;

    width: 100%;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const PanelPixel = styled(Modal)`
  .panelPixel__content {
    max-width: 330px;
    width: 100%;

    overflow: hidden;

    @media (min-width: 1024px) {
      margin-top: 10%;
    }

    @media (min-width: 768px) {
      max-width: 700px;
    }

    @media (min-width: 1024px) {
      max-width: 750px;
    }
  }

  .panelPixel__form {
    &__input {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }

  .btnGroup {
    margin: 0;
  }
`;

export const PanelPixelForm = styled.form`
  width: 100%;

  background: dodgerblue;

  label {
    font-size: 13px;

    margin-bottom: 5px;
  }
`;

export const Message = styled(Text)`
  &.success {
    color: #2fdf46;
  }

  &.error {
    color: #f14479;
  }
`;

export const SampleStyle = styled.ul`
  padding: 16px;
  list-style: none;

  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: #7c7c7c;
    font-size: 12px;

    p {
      &:first-child {
        font-weight: bold;
        margin-right: 30px;
        width: 110px;
        display: block;
        text-transform: uppercase;
      }

      &:last-child {
        text-align: center;
        width: 100px;
      }
    }
  }
`;

export const ModalContainerVideo = styled.div`
  div#modal {
    align-items: center;

    background-color: #bfbfbfab;

    > div {
      max-height: 424px;
      max-width: 754px;

      padding: 54px 53px;

      > div {
        height: 100%;

        margin-top: 0;
      }

      @media (max-width: 700px) {
        height: 50%;

        padding: 30px;
      }
    }
  }
`;

export const ModalContentVideo = styled.div`
  width: 100%;
  height: 100%;
  max-height: 424px;

  iframe {
    min-height: 424px;
    width: 100%;

    border: none;
    border-radius: 10px;

    @media (max-width: 700px) {
      min-height: auto;
      height: 100%;
    }
  }
`;

export const ModalVideoButtonCloser = styled.div`
  margin-right: -35px;
  margin-top: -40px;

  position: relative;
  float: right;

  border: none;

  background: transparent;

  button {
    font-size: 14px;

    display: contents;

    opacity: 1;
    box-shadow: none;
    letter-spacing: 0px;
    text-transform: none;

    color: #cbcaca;
    background: transparent;

    &:focus {
      outline: thin dotted;
      outline: 0px auto -webkit-focus-ring-color;
      outline-offset: 0px;
    }
  }

  @media (max-width: 700px) {
    margin-right: -12px;
    margin-top: -25px;
  }
`;
