import { useState } from 'react'
import * as S from './ModalCaixa.styles'
import Button from '../Form/Button/Button'
import {AiOutlineClose} from 'react-icons/ai'

interface IModalCaixaProps{
    cancel: ()=> void,
    setOpen: ()=> void;
}

const ModalCaixa = ({cancel, setOpen}: IModalCaixaProps) => {

    const [valueInput, setValueInput] = useState('')
    
    const handleAbrir = () =>{
        setOpen()
    }


    return (
        <S.Container>

        <S.Content>
            <header>
                <p>Abrir Caixa</p>
                <AiOutlineClose
                onClick={cancel}
                cursor='pointer'
                />
            </header>

            <main>
                <label htmlFor="">Deseja abrir o caixa com quanto? (R$)</label>
                <input type="text"  value={valueInput} onChange={({target})=>{
                    setValueInput(target.value)
                }}/>

            </main>

            <footer>
                <Button
                onclick={cancel}
                type='outline'
                text='Cancelar'
                size={20}
                />
                <Button
                onclick={handleAbrir}
                type='success'
                text='Abrir'
                size={20}
                />
            </footer>
        </S.Content>
            
        </S.Container>
    )
}

export default ModalCaixa
