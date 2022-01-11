import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const Select = styled.input`
  width: 130px;
  height: 30px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  color: transparent;
  text-shadow: 0 0 0 #000;
`;

export const Drop = styled.div`
  width: 130px;
  height: auto;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  flex-direction: column;

  > p {
    width: 100%;
    height: 50px;
    text-align: center;
    font-weight: bold;
    line-height: 50px;
    :hover {
      background-color: #ddd;
    }
  }
`;
