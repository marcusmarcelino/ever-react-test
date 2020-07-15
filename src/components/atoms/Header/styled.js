import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: row;
`;

export const HeaderRetractable = styled.div`
  cursor: pointer;
  div {
    margin-left: 12px;
  }
  display: none;

  @media (min-width: 992px) {
    margin-top: 20px;
    display: block;
    div {
      margin-left: 0px;
    }
  }
`;

export const HeaderRetractableMobile = styled.div`
  cursor: pointer;
  div {
    margin-left: 12px;
  }
  display: block;

  @media (min-width: 992px) {
    margin-top: 20px;
    display: none;
    div {
      margin-left: 0px;
    }
  }
`;

export const HeaderRight = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;

  height: 70px;
  width: 100%;
`;

export const HeaderNotification = styled.div`
  display: block;

  position: relative;

  height: 19px;
  width: 19px;
  margin-right: 20px;

  @media (min-width: 768px) {
    height: 29px;
    width: 31px;
  }

  img {
    height: 20px;
    width: 20px;

    @media (min-width: 768px) {
      height: 24px;
      width: 24px;
    }
  }
`;

export const HeaderNotificationCount = styled.div`
  font-size: 8px;
  font-weight: normal;
  text-align: center;

  border-radius: 50px;
  position: absolute;
  right: -3px;
  top: -4px;
  height: 10px;
  width: 10px;

  @media (min-width: 768px) {
    height: 15px;
    width: 15px;
    font-size: 10px;
  }

  background: #f14479;
  color: #fff;
`;

export const HeaderLanguage = styled.div`
  display: block;
  height: 20px;
  width: 20px;

  margin-right: 20px;

  @media (min-width: 768px) {
    height: 24px;
    width: 24px;
  }
`;

export const HeaderProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  height: 45px;
  width: 45px;

  margin-right: 32px;
  position: relative;

  @media (min-width: 768px) {
    margin-right: 52px;
  }

  img {
    height: 70%;
    width: 70%;

    border-radius: 50%;

    @media (min-width: 768px) {
      height: 100%;
      width: 100%;
    }
  }

  &::after {
    content: '';
    clear: both;
    display: block;
    visibility: visible;

    height: 0;
    width: 0;
    position: absolute;
    right: -10px;
    top: 17.5px;

    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #000;

    @media (min-width: 768px) {
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid #000;
      right: -30px;
    }
  }
`;
