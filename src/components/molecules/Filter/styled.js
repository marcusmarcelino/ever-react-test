import styled from 'styled-components';
import { shade } from 'polished';

import Input from '@components/atoms/Input';

import Search from '@assets/images/search.svg';

export const ContentInput = styled.div`
  display: flex;
  justify-items: center;

  width: 400px;
  height: 40px;
  padding: 5px 10px;

  border-radius: 10px;
  border: 1px solid #cdcdcd;

  background: #f1eeee 0% 0% no-repeat padding-box;

  transition: border-color 0.3s;

  &::after {
    content: '';
    clear: both;
    display: block;
    visibility: visible;
    align-self: center;

    height: 22px;
    width: 22px;

    position: relative;
    right: 0px;
    bottom: 0;
    opacity: 1;
    z-index: 1;

    background: url(${Search}) no-repeat;
    background-size: contain;
  }

  &:hover {
    border-color: ${shade(0.1, '#cdcdcd')};
  }

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const FilterInput = styled(Input)`
  text-decoration: none;

  width: 100%;
  height: 100%;

  padding: 0;
  padding-left: 5px;

  border: none;
  cursor: pointer;
  opacity: 0.3;

  background: #f1eeee;
  color: #5e5e5e;

  &:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
`;
