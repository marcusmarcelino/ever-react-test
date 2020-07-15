import styled from 'styled-components';

export const Label = styled.label`
  font-size: 12px;

  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  position: relative;

  color: #2d2d3a;

  @media (min-width: 992px) {
    font-size: 14px;
  }
`;

export default Label;
