import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: repeat(2, 49%);
  column-gap: 20px;
  grid-template-areas:
    "nome nome"
    "email email"
    "cpf nascimento"
    "celular telefone";
  > .nome {
    grid-area: nome;
  }
  > .cpf {
    grid-area: cpf;
  }
  > .email {
    grid-area: email;
  }
  > .nascimento {
    grid-area: nascimento;
  }
  > .telefone {
    grid-area: telefone;
  }
  > .celular {
    grid-area: celular;
  }
`;
