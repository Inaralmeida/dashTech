import * as S from "./DashHeader.styles";
import {Redirect} from 'react-router-dom'
import { BiMenu } from "react-icons/bi";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosExit,
  IoIosSettings,
} from "react-icons/io";
import { primeiroNome } from "../../Utils/tratarNome";
import { useState } from "react";
import ModalAlert from "../Common/ModalAlert/ModalAlert";

interface IDashHeaderProps{
  viewAside: ()=>void
}

const DashHeader = ({viewAside}:IDashHeaderProps) => {
    const [isRedirect, setIsRedirect] = useState<any>(null)
  const [dropdownActive, setDropdownActive] = useState(false);
  const [modalActive, setModalActive] = useState(false)
  const nome = localStorage.getItem("nome");

  const handleSair = (e: any) =>{
      e.preventDefault()
      localStorage.clear()
    setIsRedirect('/')
  }

  if(isRedirect !== null){
    return(
        <Redirect to={isRedirect}/>
    )
  }

  return (
    <S.Container>
      <BiMenu
      onClick={viewAside}
      size={30} cursor="pointer" />

      <section>
        <span> Olá {primeiroNome(nome)}</span>
        {!dropdownActive ? (
          <IoIosArrowDown
            onClick={() => setDropdownActive(true)}
            cursor="pointer"
          />
        ) : (
          <IoIosArrowUp
            onClick={() => setDropdownActive(false)}
            cursor="pointer"
          />
        )}
      </section>

      <S.Dropdown active={dropdownActive}>
        <a href="/">
          <IoIosSettings />
          <span>configurações</span>
        </a>
        <li  onClick={()=>setModalActive(true)}>
          <IoIosExit />
          <span>Sair</span>
        </li>
      </S.Dropdown>

      {
        modalActive &&
        (
          <ModalAlert
            btnCancelFunc={()=>setModalActive(false)}
            btnCancelText='Cancelar'
            btnOkFunc={(e)=>handleSair(e)}
            btnOkText='Sair'
            message='Tem certeza que deseja sair?'
            title='Alerta'
          />
        )
      }
    </S.Container>
  );
};

export default DashHeader;
