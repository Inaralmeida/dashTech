import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${(p) => p.theme.white};
  border-radius: 15px;
`;

export const Stages = styled.div`
  width: 100%;
  height: 70px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 15px 15px 0 0;

  > div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Forms = styled.div`
  width: 80%;
  height: 70%;
`

export const Buttons = styled.section`
    width: 100%;
    padding: 0 15px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`