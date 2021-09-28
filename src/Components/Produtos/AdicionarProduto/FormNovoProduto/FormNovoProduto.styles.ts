import styled from "styled-components";

interface IFotocontainerProps {
  url: string;
}

export const Container = styled.div`
width: 100%;
height: 100%;
  > form{
    width: 100%;
  height: auto;
  display: grid;
  padding: 0 30px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(9, 50px) ;
  gap: 30px;
  grid-template-areas:
    "foto id data"
    "foto nome nome"
    "foto url url"
    "foto . ."
    "descricao descricao descricao"
    "descricao descricao descricao"
    "descricao descricao descricao"
    "pb pv qtd"
    "fornecedores categoria marcas"
    ;
  > .input-foto {
    width: 100%;
    grid-area: foto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    > img {
      width: 70%;
      object-fit: cover;
    }
  }
  > .input-nome {
    grid-area: nome;
  }
  > .input-id {
    grid-area: id;
  }
  > .input-data {
    grid-area: data;
  }
  > .input-qtd {
    grid-area: qtd;
  }
  > .input-url {
    grid-area: url;
  }
  > .input-pb {
    grid-area: pb;
  }
  > .input-pv {
    grid-area: pv;
  }
  > .input-descricao {
    grid-area: descricao;
  }
  > .input-fornecedores {
    grid-area: fornecedores;
  }
  > .input-marcas {
    grid-area: marcas;
  }
  > .input-categoria{
    grid-area: categoria;
  }
  }

  > footer {
    padding: 2px 30px;
    height: 50px;
    width: 100%;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
`;

export const FotoContainer = styled.div<IFotocontainerProps>`
  width: 100%;
  height: 100%;
  background-image: url(${(p) => p.url});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border: 1px solid ${(p) => p.theme.gray};
  border-radius: 5px;
`;
