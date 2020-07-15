import styled from 'styled-components';

export const ContainerSpace = styled.div`
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

  .card_space:not(:last-child) {
  }

  @media (min-width: 375px) {
    justify-content: space-between;
    .card_space:nth-child(3),
    .card_space:nth-child(4) {
    }

    .card_space:nth-child(2),
    .card_space:nth-child(4) {
    }
  }

  @media (min-width: 414px) {
    justify-content: space-between;
    padding: 20px;

    .card_space:not(:last-child) {
    }
    .card_space:nth-child(2),
    .card_space:nth-child(4) {
    }
  }
  @media (min-width: 992px) {
    .card_space:nth-child(4) {
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
