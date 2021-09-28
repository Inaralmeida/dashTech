import styled from "styled-components";

interface IContainerProps{
  asideView: boolean
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  height: 100vh;
  color: ${(p) => p.theme.white};
  display: grid;
  grid-template-rows: 51px auto;
  grid-template-columns: ${p => p.asideView ? '250px' : '80px'} auto;
  grid-template-areas:
    "aside header"
    "aside content";

  > .aside {
    grid-area: aside;
    background-color: ${(p) => p.theme.black};
  }
  > .header {
    grid-area: header;
    background-color: ${(p) => p.theme.white};
  }
  > .content {
    grid-area: content;
    background-color: green;
    height: calc(100vh - 70px);
    background-color: ${(p) => p.theme.white};
    color: ${(p) => p.theme.black};
  }
`;
