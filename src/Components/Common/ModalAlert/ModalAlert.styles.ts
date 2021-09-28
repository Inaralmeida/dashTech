import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);

  > section {
    color: ${(p) => p.theme.black};
    width: 400px;
    height: 250px;
    background-color: ${(p) => p.theme.white};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: 10px;
    > header {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 10px;
      background-color: ${(p) => p.theme.secundary};
      color: ${(p) => p.theme.white};
      font-weight: bold;
      border-radius: 10px 10px 0 0;

    }

    > main {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    > footer {
      /* border-top: 1px solid ${(p) => p.theme.gray}; */
      padding: 2px 10px;
      height: 65px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
