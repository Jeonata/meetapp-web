import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 92px;
  background: #000;
  padding: 0 25;
`;

export const Content = styled.div`
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 31px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    margin-right: 30px;
    text-align: right;

    strong {
      display: block;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    a {
      display: block;
      margin-top: 5px;
      font-size: 14px;
      color: #999;
    }
  }

  button {
    width: 71px;
    height: 42px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    background: #d44059;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#d44059')};
    }
  }
`;
