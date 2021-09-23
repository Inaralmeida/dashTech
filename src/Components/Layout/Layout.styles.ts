import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: ${(p) => p.theme.white};
  display: grid;
  grid-template-rows: 70px auto;
  grid-template-columns: 250px auto;
  grid-template-areas:
    "aside header"
    "aside content";

  > .aside {
    grid-area: aside;
    background-color: ${(p) => p.theme.tertiary};
  }
  > .header {
    grid-area: header;
    background-color: ${(p) => p.theme.tertiary};
  }
  > .content {
    grid-area: content;
    background-color: green;
    height: calc(100vh - 70px);
    background-color: ${(p) => p.theme.primary};
  }
`;
