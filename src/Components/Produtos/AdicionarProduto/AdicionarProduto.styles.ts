import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
 

  > header {
    width: 100%;
    height: 30px;
    padding-left: 30px;
  }

  > main {
    width: 100%;
    margin-top: 10px;
    height: auto;
    overflow-y: auto;
  }

  
`;
