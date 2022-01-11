import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: ${p => p.theme.white};
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >section{
        width: 50%;
        >p{
        }
    }
` 