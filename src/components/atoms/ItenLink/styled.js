import styled from 'styled-components';

export const ItenLink = styled.li`
  display: flex;
  background-color: ${(props) => (props.selected ? 'rgba(1,163,255,0.2)' : '')};
  background-color: ${(props) => (props.retractable ? '#ffff' : '')};
  cursor: ${(props) => (props.disabled ? '' : 'pointer')};

  &:hover {
    background: rgba(1, 163, 255, 0.05);
  }
`;

export const IconLink = styled.div`
  border-radius: 0px 40px 40px 0px;
  background-color: ${(props) => (props.selected ? 'rgba(1,163,255)' : '')};
`;

export const ContainerText = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.count > 0 || props.haveChildren ? '1fr 1fr' : '1fr')};
  grid-template-rows: 10px;
  width: 100%;
  justify-content: start;
`;

export const Text = styled.div`
  padding: 15px 0px 15px 20px;
  color: ${(props) => (props.selected ? 'rgba(1,163,255)' : '')};
  color: ${(props) => (props.disabled ? 'rgba(94,94,94, 0.3)' : '')};
  font-size: 16px;
`;

export const Count = styled.div`
  padding: 15px 40px 15px 20px;
  color: ${(props) => (props.selected ? 'rgba(1,163,255)' : '')};
  color: ${(props) => (props.disabled ? 'rgba(94,94,94, 0.3)' : '')};
  font-size: 16px;
  text-align: right;
`;

export const Drop = styled.div`
  color: ${(props) => (props.selected ? 'rgba(1,163,255)' : '')};
  color: ${(props) => (props.disabled ? 'rgba(94,94,94, 0.3)' : '')};
  padding: 0px 0px 15px 50px;
`;

export default ItenLink;
