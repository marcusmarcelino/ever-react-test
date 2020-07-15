import styled, { css } from 'styled-components';

const listOfProducts = {
  ecommerce: () => css``,
  purchase: () => css`
    padding: 10px;

    border: 1px solid #bdbdbd;
  `,
};

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  max-width: 300px;

  ${(props) => listOfProducts[props.type]}
  background: #FBFBFB;

  .product {
    &:nth-child(2n + 1) {
      margin-right: 10px;
    }

    & {
      margin-bottom: 25px;

      @media (min-width: 768px) {
        margin-bottom: 50px;
      }
    }
  }

  @media (min-width: 768px) {
    max-width: 100%;

    .product:nth-child(3n + 3) {
      margin-right: 0;
    }
  }

  @media (min-width: 768px) {
    .product {
      margin-right: 50px;
    }

    .product,
    .product:nth-child(3n + 3) {
      margin-right: 32px;
    }
  }
`;

export default ProductsContainer;
