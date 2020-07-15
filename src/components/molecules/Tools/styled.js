import styled from 'styled-components';

export const ContainerTool = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;

  margin-top: 25px;
  width: 100%;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 15px;
  width: 100%;

  border-radius: 15px;

  background: #fff;

  .card_tool:not(:last-child) {
    margin-bottom: 20px;
  }

  @media (min-width: 375px) {
    .card_tool:nth-child(3),
    .card_tool:nth-child(4) {
      margin-bottom: 0;
    }

    .card_tool:nth-child(2),
    .card_tool:nth-child(4) {
      margin-left: 15px;
    }
  }

  @media (min-width: 414px) {
    justify-content: space-between;
    padding: 20px;

    .card_tool:not(:last-child) {
      margin-bottom: 20px;
    }
    .card_tool:nth-child(2),
    .card_tool:nth-child(4) {
      margin-left: 0;
    }
  }
  @media (min-width: 992px) {
    .card_tool:nth-child(4) {
      margin-left: 0;
    }
  }
  @media (min-width: 1366px) {
    padding: 35px 80px;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;

  display: block;
  margin-bottom: 10px;
  width: 100%;
`;
