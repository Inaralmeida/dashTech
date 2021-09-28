import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
  top: 0;
  left: 0;
`
export const Content = styled.div`
    color: ${(p) => p.theme.black};
    width: 80%;
    height: 80%;
    background-color: ${(p) => p.theme.white};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: 10px;

    > header {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 10px;
      background-color: ${(p) => p.theme.secundary};
      color: ${(p) => p.theme.white};
      font-weight: bold;
      border-radius: 10px 10px 0 0;

    }
    
    > main{
      width: 100%;
      padding: 20px;
      height: calc(100% - 115px);
      display: grid;
      gap: 10px;
      grid-template-rows: repeat(3, 50px) auto ;
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas: 
      'foto nome nome'
      'foto url url'
      'foto preco qtd'
      'foto desc desc'
      ;
      > .input-foto{
        grid-area: foto;
        display: flex;
        align-items: center;
        justify-content: center;
         > img{
           width: 100%;
         }
      }
      > .input-nome{
        grid-area: nome;
      }
      > .input-url{
        grid-area: url;
      }
      > .input-preco{
        grid-area: preco;
      }
      > .input-qtd{
        grid-area: qtd;
      }
      > .input-desc{
        grid-area: desc;

      }
      
      
    }
    > footer {
      padding: 2px 10px;
      height: 65px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
`

