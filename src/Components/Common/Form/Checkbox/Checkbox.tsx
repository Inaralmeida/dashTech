import React from 'react'
import styled from 'styled-components'

interface ICheckboxProps{

    name: string,
    value: boolean,
    label: string,
    onchange: ()=> void

}

const Check = styled.div`
    width: 100%;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 10px 0;

    > label{
        margin-left: 5px;
    }

    > input{
        cursor: pointer;
    }
`


const Checkbox = ({name, value, onchange, label}: ICheckboxProps) => {
    return (
        <Check>
            <input type="checkbox" name={name} checked={value} onChange={onchange} />
            <label htmlFor="">{label}</label>
        </Check>
    )
}

export default Checkbox
