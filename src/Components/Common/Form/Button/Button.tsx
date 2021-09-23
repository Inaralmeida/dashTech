import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'


interface IButtonProps{
    type: string,
    text: string,
    size: number,
    disabled?: boolean,
    onclick: (e: any)=> void
}
interface IButtonStylesProps{
    style: {
        backgorund: string,
        color: string,
        size: number
    }
}
const ButtonStyle = styled.button<IButtonStylesProps>`

    width: ${p => p.style.size}%;
    background-color: ${p => p.style.backgorund};
    color: ${p => p.style.color};
    height: 50px;
    border-radius: 5px;
    font-weight: 700;

`

const Button = ({type, text, size, onclick, disabled = false}: IButtonProps) => {

    const theme = useContext(ThemeContext)
    
    const style = {
        backgorund: type === 'success' ? theme.success : type === 'warning' ? theme.warning : theme.primary,
        color:  theme.white ,
        size: size
    }
    return (
        <ButtonStyle 
        style={style}
        disabled={disabled}
        onClick={onclick}>
            {text}
        </ButtonStyle>
    )
}

export default Button
