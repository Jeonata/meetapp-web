import styled, { keyframes, css } from 'styled-components';
import { darken } from 'polished';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;

  header {
    padding: 50px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      width: 172px;
      height: 42px;
      background-color: #f94d6a;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: bold;
      border-radius: 4px;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }

      svg {
        margin-right: 10px;
      }
    }
    strong {
      font-weight: bold;
      font-size: 32px;
      color: #fff;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  ${props =>
    props.loading &&
    css`
      li {
        display: flex;
        justify-content: center;
      }
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const Meetup = styled.li`
  display: flex;
  width: 100%;
  height: 62px;
  padding: 0 30px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  strong {
    color: #fff;
    font-weight: bold;
    font-size: 18px;
  }

  div {
    display: flex;
    align-items: center;

    span {
      color: rgba(255, 255, 255, 0.6);
      font-size: 16px;
    }

    svg {
      margin-left: 30px;
    }
  }
`;
