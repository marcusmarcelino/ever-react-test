import styled from 'styled-components';
import Input from '@components/atoms/Input/styled';
import Button from '@components/atoms/Button/styled';

export const InputComponent = styled(Input)`
  margin: 15px 0px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Form = styled.form`
  button {
    width: 100%;
  }

  a {
    text-decoration: none;

    color: #5eb4f6;
  }

  .forgot {
    text-align: right;
  }

  .remember,
  .forgot {
    font-size: 15px;

    display: inline-block;

    width: 50%;
    margin-bottom: 50px;

    color: #2d2d3a;

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  .remember div {
    display: inline-flex;

    margin-right: 10px;
  }

  .remember span,
  .forgot a {
    font-size: 12px;

    top: -3px;
    position: relative;

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  .ErrorMessage {
    font-size: 14px;
    color: red;
  }
`;

export const Submit = styled(Button)`
  width: 100%;
  &::after {
    ${(props) => (props.icon === 'arrowRight' ? 'right: 15px; top: 10px; width: 12px;' : '')}
  }
`;
