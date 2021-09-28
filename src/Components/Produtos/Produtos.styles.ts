import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
`
export const Tabs = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .active{
        background-color: ${p => p.theme.primary};
        font-weight: bold;
        color: ${p => p.theme.white};
        border: none;
    box-shadow: 2px -2px 2px rgba(0, 0, 0, 0.3);

    }
    > div{
        width: 150px;
        height: 100%;
        border: 1px solid ${p=> p.theme.gray};
        background-color: ${p => p.theme.white};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px 10px 0 0;
        cursor: pointer;
    }
`
export const Content = styled.div`
    width: 100%;
    height: 93%;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
    border-radius: 0 15px 15px 15px;
`