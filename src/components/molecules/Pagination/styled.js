import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  font-size: 16px;

  display: flex;
  float: right;
  align-items: center;

  margin-bottom: 40px;
  margin-right: 40px;

  color: #7c7c7c;

  span {
    margin: 0 15px;
  }

  div.filter__container__search {
    margin-left: 20px;
  }

  div {
    display: flex;
    align-items: center;
  }

  input {
    width: 51px;
    height: 30px;
    padding-left: 5px;

    border-radius: 8px 0 0 8px;
    border: 1px solid #bdbdbd;
    cursor: pointer;

    &:focus {
      outline: thin dotted;
      outline: 0px auto -webkit-focus-ring-color;
      outline-offset: 0px;
    }
  }

  button {
    width: 20px;
    height: 34px;
    min-height: 34px;

    padding: 0px;

    border: none;
    border-radius: 0 8px 8px 0;
    cursor: pointer;

    &::after {
      position: initial;

      width: 5px;
      height: 11px;

      margin: 0 auto;
    }

    &:focus {
      outline: thin dotted;
      outline: 0px auto -webkit-focus-ring-color;
      outline-offset: 0px;
    }

    &:hover {
      background: ${shade(0.2, '#01a3ff')};
      color: #fff;
    }
  }

  @media (max-width: 700px) {
    justify-content: center;

    width: 100%;

    margin: 0 auto;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    justify-items: center;

    list-style: none;

    li.active {
      box-shadow: 0px 3px 6px #00000029;

      background: #ffffff 0% 0% no-repeat padding-box;

      a {
        font: SemiBold 16px/25px Poppins;
        letter-spacing: 0px;

        opacity: 1;
        text-decoration: none;

        color: #7c7c7c;
      }
    }

    li.default {
      opacity: 1;

      a {
        text-decoration: none;

        color: #7c7c7c;
      }
    }
  }
`;

export const Li = styled.li`
  font-size: 16px;
  text-align: center;

  height: 24px;
  width: 24px;

  border-radius: 100%;
`;
