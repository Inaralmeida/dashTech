import { useEffect, useState } from "react";
import ModalCaixa from "../Common/ModalCaixa/ModalCaixa";
import Button from "../Common/Form/Button/Button";
import * as S from "./CaixaRegistradora.styles";
import CRContent from "./Content/CRContent";

const CaixaRegistradora = () => {
  const [caixaAberto, setCaixaAberto] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const [ehNovaVenda, setEhNovaVenda] = useState(false);

  useEffect(()=>{
    const caixaTaAberto = localStorage.getItem('caixaAberto')
    setModalAberto(caixaTaAberto === 'true' ? true :  false)
  },[])

  const handleAbrirCaixa = () => {
    setModalAberto(false);
    setCaixaAberto(true);
  };
  const handleCancelAbrirCaixa = () => {
    setModalAberto(false);
    setCaixaAberto(false);
    setEhNovaVenda(false);
  };


  return (
    <S.Container>
      <header>
        <p>Tenha um execlente dia &#128512; </p>

        

        {!caixaAberto ? (
          <Button
            type="filled"
            size={10}
            onclick={() => setModalAberto(true)}
            text="Abrir Caixa"
          />
        ) : !ehNovaVenda ? (
          <>
            <S.Buttons>
              <Button
                type="success"
                size={40}
                onclick={() => setEhNovaVenda(true)}
                text="Nova Venda"
              />
              <Button
                type="outlineWhite"
                size={40}
                onclick={handleCancelAbrirCaixa}
                text="fechar Caixa"
              />
            </S.Buttons>
          </>
        ) : (
          <Button
            type="outlineWhite"
            size={10}
            onclick={()=> setEhNovaVenda(false)}
            text="Cancelar Venda"
          />
        )}
      </header>

      <S.Content>
        <div className={!ehNovaVenda ? "block" : ""}></div>
        {ehNovaVenda && <CRContent />}
      </S.Content>

      {modalAberto && (
        <ModalCaixa
          cancel={handleCancelAbrirCaixa}
          setOpen={handleAbrirCaixa}
        />
      )}
    </S.Container>
  );
};

export default CaixaRegistradora;
