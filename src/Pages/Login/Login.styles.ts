import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`
export const Section = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${p => p.theme.black};
    color: ${p => p.theme.background};
    display: flex;
    align-items: center;
    justify-content: center;

`

export const SectionForm = styled(Section)`
    background-color: ${p => p.theme.white};
    color: ${p => p.theme.black};

    
`

export const Form =  styled.form`
    width: 50%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    > p{
        width: 100%;
        font-size: 15px;

        > a{
            text-decoration: none;
            color: ${p => p.theme.secundary}
        }
    }
`