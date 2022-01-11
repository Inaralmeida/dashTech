import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #101010;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  > input {
    width: 70%;
    height: 90%;
    outline: none;
    padding-left: 15px;
    border-radius: 10px;
  }
`;

export const Quantidade = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 10px;
  height: 90%;
`;

export const Dropdown = styled.div`
  background-color: ${(p) => p.theme.white};
  width: 550px;
  height: 300px;
  margin-top: 352px;
  margin-left: 10px;
  position: absolute;
  border-radius: 0 0 7px 7px;
  border: 1px solid ${(p) => p.theme.black};
  border-top: none;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.7);
  overflow-y: auto;
`;

export const ItemLista = styled.p`
  display: block;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${(p) => p.theme.black};
  color: ${(p) => p.theme.black};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  padding: 10px;

  :hover {
    background-color: #ccc;
  }
`;
