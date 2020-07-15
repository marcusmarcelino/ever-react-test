import styled from 'styled-components';

import Container from '@components/atoms/Container';

export const InputContainer = styled(Container)``;

export const Input = styled.input`
  font-size: 12px;

  display: block;
  border: none;
  border-radius: 10px;
  height: 40px;

  padding: 14px 0 14px 30px;
  width: 100%;

  background: ${(props) => (props.variant === 'login' ? '#ccedff' : '#f2f2f2')};
  color: #2d2d3a;

  &:disabled {
    cursor: not-allowed;
    background: #eaeaea;
  }

  @media (min-width: 992px) {
    font-size: 16px;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 10px;
  text-align: left;
  text-transform: uppercase;

  margin-top: 5px;

  color: #f14479;
`;

export default Input;
