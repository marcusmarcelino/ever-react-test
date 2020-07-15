import styled from 'styled-components';

export const Spacer = styled.div`
  border-style: solid;
  border-bottom-width: 1px;
  border-top-width: 0;
  border-right-width: 0;
  border-left-width: 0;
  border-color: #dcdcdc;
  margin-left: 22px;
  width: ${(props) => (props.size === 'sm' ? '29px' : '')};
  width: ${(props) => (props.size === 'md' ? '279px' : '')};
`;

export default Spacer;
