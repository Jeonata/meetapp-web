import styled from 'styled-components';

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

  ul {
    display: flex;
    flex-direction: column;
  }
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

  strong {
    color: #fff;
  }

  div {
    display: flex;
    align-items: center;

    span {
      color: rgba(255, 255, 255, 0.6);
    }

    svg {
      margin-left: 30px;
    }
  }
`;
