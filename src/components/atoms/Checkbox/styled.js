import styled from 'styled-components';

import Label from '@components/atoms/Label';

export const ContainerCheckbox = styled(Label)`
  padding-left: 30px;

  p {
    font-size: 12px;

    margin-top: 2px;
  }

  &::before,
  &::after {
    display: block;

    position: absolute;

    border-radius: 3px;
  }

  &::before {
    visibility: visible;

    left: 5px;
    top: 2.5px;

    width: 13px;
    height: 13px;

    border: 1px solid rgba(40, 40, 40, 0.5);
  }
  &::after {
    ${(props) => (props.active ? 'visibility: visible;' : null)}
    left: 6.99999px;
    top: 5.4999997px;

    width: 11px;
    height: 11px;

    background: dodgerblue;
    transition: 1ms visibility linear;
  }

  @media (min-width: 992px) {
    &::before {
      height: 14px;
      width: 14px;
    }
    &::after {
      height: 12px;
      width: 12px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const Checkbox = styled.input`
  margin-right: 16px;
`;
