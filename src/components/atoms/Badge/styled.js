import styled from 'styled-components';

export const Badge = styled.div`
  padding: 3px 0 3px 12px;
  position: absolute;
  left: -10px;
  top: 8px;

  max-width: 80px;
  width: 100%;
  z-index: 1;

  background: #01a3ff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.16);

  &::after {
    content: '';
    clear: both;
    display: block;
    visibility: visible;
    position: absolute;
    left: 0;
    bottom: -20px;
    height: 0;
    width: 0;

    border-top: 0.65rem solid #005a94;
    border-bottom: 0.65rem solid transparent;
    border-left: 0.65rem solid transparent;
  }

  @media (min-width: 768px) {
    max-width: 125px;
  }
`;

export const BadgeText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;

  color: #fff;

  @media (min-width: 768px) {
    font-size: 15px;

    padding: 7px 15px 7px 20px;
  }
`;
