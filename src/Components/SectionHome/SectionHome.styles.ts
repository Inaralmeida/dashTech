import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;

  > div {
    background-color: ${(p) => p.theme.background};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 25px;
    padding: 20px;

    > section {
      width: 30%;
      height: 80%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      font-size: 32px;
      > img {
        width: 50%;
      }
    }

    > p {
      width: 50%;
      height: auto;
      display: block;
      font-size: 22px;
      line-height: 28px;
      text-align: center;
    }
  }
`;
