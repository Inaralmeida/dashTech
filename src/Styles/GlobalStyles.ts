import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        /* font-family: 'Roboto', sans-serif; */

    }

    html, body, #root{
        width: 100%;
        height: 100vh;
        background-color: ${p => p.theme.white};
        color: ${p => p.theme.black}
    }
    p{
    }

    button{
        cursor: pointer;
        border: 0;
        outline: 0;

    }

    input{
        cursor: text;
        outline: 0;

    }

    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-track{
        width: 10px;
        border-radius: 5px;

        background: ${p => p.theme.background};
    }
    ::-webkit-scrollbar-thumb{
        width: 10px;
        border-radius: 5px;
        background: ${p => p.theme.secundary};
    }

`
export default GlobalStyles