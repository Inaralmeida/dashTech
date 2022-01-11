import React, { useState } from "react";
import * as S from "./Configuracoes.styles";
import { IoIosArrowDown } from "react-icons/io";

interface IConfiguracoesProps {
  defaultOption: string;
}

const Configuracoes = ({ defaultOption }: IConfiguracoesProps) => {
  const [openDrop, setOpenDrop] = useState(false);
  const [optionSelected, setOptionSelected] = useState(defaultOption);

  const onChangeOption = (e: any) => {
    const id = e.target.id;
    setOptionSelected(id);
    setOpenDrop(false);
    console.log(e);
  };

  return (
    <S.Container>
      <S.Select
        // onBlur={() => {
        //   setOpenDrop(false);
        //   console.log("onblue");
        // }}
        onFocus={() => {
          setOpenDrop(!openDrop);
          console.log("focus");
        }}
        value={optionSelected}
      ></S.Select>

      {openDrop && (
        <S.Drop
        >
          <p id="active" onClick={onChangeOption}>
            active
          </p>
          <p id="inactive" onClick={onChangeOption}>
            inactive
          </p>
        </S.Drop>
      )}
    </S.Container>
  );
};

export default Configuracoes;
