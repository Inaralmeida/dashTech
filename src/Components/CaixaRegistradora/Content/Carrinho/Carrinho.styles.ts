import styled from "styled-components";


export const Container = styled.div `
    width: 100%;
    height: 100%;
    overflow-y: auto;
    color: ${p=> p.theme.black};
    padding: 10px;
`

export const ItemLista = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    border-bottom: 1px dashed ${p => p.theme.black} ;
    font-size: 16px;
    padding: 0 15px;


    > section{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;

        > article{
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            font-size: 14px;

            > p {
                margin-right:  25px;
            }

            > .valorTotal{
                margin-left: auto;
                margin-right:  0;
                font-size: 16px;
                font-weight: 600;
            }
        }
    }
`