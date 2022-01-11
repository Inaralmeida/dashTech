import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(50, 50, 50, 0.75);
`;

export const Content = styled.div`
  width: 550px;
  height: 350px;
  background-color: ${(p) => p.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 20vh auto;
  border-radius: 15px;

  > header {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(p) => p.theme.secundary};
    border: 1px solid  ${(p) => p.theme.secundary};
    border-radius: 13px 13px 0 0;
    color: white;
    padding: 20px;
  }

  > main{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > input{
          width: 70%;
          height: 50px;
          border-radius: 5px;
          outline: none;
          padding-left: 15px;
          margin-top: 10px;

      }
  }

  > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    padding: 20px;
  }
`;
