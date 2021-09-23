import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  margin-top: 70px;
  width: 100%;
  overflow-y: scroll;
  
  > section {
    width: 100%;
    height: calc(100vh - 70px);
  }
`;


export const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: ${(p) => p.theme.black};
  color: ${(p) => p.theme.primary};
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  >h1 {
    color: ${p => p.theme.background};
  }
  > nav {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    > li,
    a {
      list-style: none;
      text-decoration: none;
      color: ${(p) => p.theme.primary};
      cursor: pointer;
      :hover {
        color: ${(p) => p.theme.background};
      }
      :active {
        color: ${(p) => p.theme.background};
      }
    }
  }
`;
