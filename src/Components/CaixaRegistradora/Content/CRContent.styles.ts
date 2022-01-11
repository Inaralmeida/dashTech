import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  display: grid;
  margin-top: 15px;
  grid-template-columns: 39% 29% 29%;
  grid-template-rows: 50px 40vh calc(40vh - 50px);
  column-gap: 1.5%;
  row-gap: 3%;
  grid-template-areas:
    "busca infos pagamento"
    "carrinho infos pagamento"
    "carrinho total botoes";

  > .busca {
    grid-area: busca;
  }
  > .carrinho {
    grid-area: carrinho;
    background-color: #fff;
    border-radius: 10px;
  }
  > .infos {
    grid-area: infos;
    background-color: #fff;
    border-radius: 10px;
  }
  > .total {
    grid-area: total;
    background-color: #fff;
    border-radius: 10px;
  }
  > .pagamento {
    grid-area: pagamento;
    background-color: #fff;
    border-radius: 10px;
  }
  > .botoes {
    grid-area: botoes;
    background-color: #fff;
    border-radius: 10px;
  }
`;
