import styled from 'styled-components';

import BgLayout from '../../../assets/images/bg_layout.svg';

export const Container = styled.div`
  display: grid;
  grid-template-areas: 'content content';

  height: 100vh;
  overflow: hidden;

  background: url(${BgLayout}) no-repeat;
  background-position-y: 74px;
  background-size: cover;

  @media (min-width: 992px) {
    grid-template-columns: 320px 1fr;
    grid-template-areas: 'sidebar content';

    background-size: 100%;
    grid-template-columns: ${(props) => (props.retractable ? '112px 1fr' : '360px 1fr')};
    grid-template-areas: 'sidebar content';
  }
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  grid-area: content;

  height: 100vh;
  width: 100%;
  overflow-y: scroll;

  padding: 0 20px;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    padding: 15px 22px 41px 22px;
  }

  @media (min-width: 1024px) {
    padding-bottom: 0;
  }
`;

export const Sidebar = styled.aside`
  display: none;

  height: 100vh;

  overflow-y: scroll;

  box-shadow: 0 4px 19px rgba(0, 0, 0, 0.5);

  background: #fff;
  color: #000;

  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 10px;

    border-radius: 10px;

    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }

  @media (min-width: 992px) {
    display: block;
  }
`;

export const SidebarMobile = styled.aside`
  display: ${(props) => (props.retractableMobile ? 'none' : 'block')};
  position: absolute;
  z-index: 99999;
  height: 1000px;

  margin-right: 36px;

  box-shadow: 0 4px 19px rgba(0, 0, 0, 0.5);

  background: #fff;
  color: #000;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  margin-bottom: 10px;
  width: 100%;

  @media (min-width: 992px) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;

  margin-bottom: 20px;

  h3 {
    font-size: 20px;
    text-align: center;

    color: #5e5e5e;

    @media (min-width: 992px) {
      text-align: left;
    }
  }
`;

export const Children = styled.div``;
