
import React from 'react'
import styled from 'styled-components'

interface IMessageErrorProps{
    message: string
}

const Error = styled.span`
    font-size: 12px;
    color: ${p=> p.theme.warning};
    text-align: left;
`

const MessageError = ({message}: IMessageErrorProps) => {
    return (
        <Error>
           {message} 
        </Error>
    )
}

export default MessageError
