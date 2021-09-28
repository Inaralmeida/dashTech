import styled from "styled-components";

interface IDropdownProps{
    active: boolean
    
}


export const Container = styled.div`
    width: 100%;
    height: 90%;
    color: ${p => p.theme.black};
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    > section{
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`

export const Dropdown = styled.div<IDropdownProps>`
    width: 200px;
    height: 100px;
    background-color: ${p => p.theme.white};
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 45px;
    margin-right: 20px;
    display: ${p=> p.active ? 'flex' : 'none'};
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    transition: all 1s;
    border-radius: 0 0 15px 15px;

    >a {
        width: 100%;
        height: 50px;
        padding: 0 10px;
        color: ${p => p.theme.black};
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-radius: 0 0 15px 15px;

        > span{
            margin-left: 5px;
        }
        :hover{
            background-color: #e1e1e1;
        }
    }
`