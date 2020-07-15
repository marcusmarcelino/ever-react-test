import styled from 'styled-components';

import Lnk from '@components/atoms/Link';
import Txt from '@components/atoms/Text';

export const Product = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  max-width: 131px;

  @media (min-width: 992px) {
    width: 281px;

    border-radius: 15px;
  }
`;

export const ProductContainer = styled.div`
  width: 100%;

  padding: 10px;

  border-radius: 10px;

  background: #fff;
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  text-align: center;

  margin-bottom: 15px;

  width: 100%;

  @media (min-width: 992px) {
    font-size: 18px;

    margin-bottom: 20px;
  }
`;

export const ProductImage = styled.div`
  width: 100%;

  img {
    margin: 0 auto;
    height: 195px;
    width: 100%;

    @media (min-width: 992px) {
      height: 170px;
      width: 170px;
    }
  }
`;

export const ProductValues = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  &.product__value {
    margin-top: 15px;

    @media (min-width: 992px) {
      margin-top: 20px;
    }
  }
`;

export const ProducInfo = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;

    margin-top: 15px;
    width: 100%;

    div {
      display: flex;

      width: 100%;

      &:first-child {
        width: 364px;
      }

      &:last-child {
        justify-content: flex-end;
      }
    }

    p {
      height: 25px;
      width: 25px;
    }

    p:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

export const ProductLink = styled(Lnk)`
  font-size: 12px;
  font-weight: 500;
`;

export const ProductTextClick = styled(Txt)`
  cursor: pointer;
`;
