import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${p => p.theme.background};
    
    > div{
        width: 25%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 20px;
        background-color: #1e1e1e;
        text-align: center;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
        color: ${p => p.theme.white};
        border-radius: 25px;
        font-size: 22px;
        line-height: 28px;
        > img{
            width: 70%;
        }
    }
    
`