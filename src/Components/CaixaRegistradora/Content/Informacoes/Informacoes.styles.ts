import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(p) => p.theme.black};
  padding: 15px;

  > .select,
  .input {
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
  }

  > .desconto {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .buttons {
      width: 15%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      cursor: pointer;
      > .iconClose {
        font-size: 20px;
        color: ${(p) => p.theme.warning};
      }
      > .iconSave {
        font-size: 20px;
        color: ${(p) => p.theme.info};
      }
    }
  }
`;

export const CalculadoraDesconto = styled.div`
  width: 100%;
  height: calc(100% - 120px);
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  > .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .buttons {
      width: 15%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      cursor: pointer;
      > .iconClose {
        font-size: 20px;
        color: ${(p) => p.theme.warning};
      }
      > .iconSave {
        font-size: 20px;
        color: ${(p) => p.theme.success};
      }
    }
  }

  > .item {
    width: 95%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > input {
      width: 80px;
    }
  }
`;
