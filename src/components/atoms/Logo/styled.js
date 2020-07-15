import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  img {
    height: ${(props) => (props.size === 'sm' ? '18px' : '')};
    width: ${(props) => (props.size === 'sm' ? '33px' : '')};

    height: ${(props) => (props.size === 'md' ? '42px' : '')};
    width: ${(props) => (props.size === 'md' ? '132px' : '')};
  }
`;

export default Logo;
