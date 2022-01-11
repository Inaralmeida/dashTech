import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 15px;
    color: ${p => p.theme.black};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;

`

export const ItemLista = styled.div`
    width: 95%;
    height: 30%;
    padding: 15px;
    border-radius: 0 0 25px 0;
    display: flex;

    align-items: center;
    justify-content: space-between;
    border: 0;
    border-bottom: 3px solid  ${p => p.theme.gray};

    > .total{
        font-weight: bold;
    }
`