import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${p=> p.theme.tertiary};
  color: ${p=> p.theme.white};
  padding: 20px;

  > header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Content = styled.div`

  width: 100%;
  height: calc(100% - 70px);
  border-radius: 15px;
  

  > .block {
    width: 100%;
    height: 100%;
    display: block;

    border-radius: 15px;
    cursor: not-allowed;
    background-color: rgba(50, 50, 50, 0.75);
  }
`;

export const Buttons = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
