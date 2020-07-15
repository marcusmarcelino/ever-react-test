import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  height: auto;
  width: 100%;
`;

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: center;
`;

export const LogoStyle = styled.img`
  width: 147px;
  height: 80px;
  margin-bottom: 20px;
`;

export const ContainerBody = styled.main`
  width: 100%;
  height: auto;
  padding: 37px 31px;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 26px #00000029;
  border-radius: 20px;
  opacity: 1;

  .title {
    margin-bottom: 60px;
  }

  @media (min-width: 768px) {
    width: 446px;
    height: auto;
  }
`;

export const ContainerTitle = styled.h1`
  font-weight: bold;
  font-size: 25px;

  color: #5e5e5e;
`;

export const Uppercase = styled.span`
  text-transform: uppercase;
`;

export const ContainerSubtitle = styled.h2`
  font-weight: 100;
  font-size: 18px;

  color: #5e5e5e;
`;

export const Close = styled.span`
  font-size: 14px;

  position: relative;
  right: -15px;
  top: -21px;
  float: right;

  color: #cbcaca;
`;
