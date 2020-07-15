import styled from 'styled-components';

export const ContainerStatus = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Cards = styled(ContainerStatus)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  .card_status:not(:last-child) {
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    .card_status:not(:last-child) {
    }
    .card_status:nth-child(1),
    .card_status:nth-child(2) {
      margin-bottom: 20px;
    }
  }
  @media (min-width: 1366px) {
    justify-content: space-between;

    .card_status:nth-child(1),
    .card_status:nth-child(2) {
      margin-bottom: 20px;
    }
  }
`;
