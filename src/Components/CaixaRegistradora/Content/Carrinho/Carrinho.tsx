import { useEffect, useState } from "react";
import { formataValor } from "../../../../Utils/formataValor";
import * as S from "./Carrinho.styles";

const Carrinho = ({ produtos, itens, addItem }: any) => {
  
  const [itensCar, setItensCar] = useState([])

  useEffect(()=>{
    setItensCar(itens)
  }, [addItem, itens])
  return (
    <S.Container>
      {itensCar.length > 0 ? (
        itensCar.map((item: any) => {
          return (
            <S.ItemLista>
              <section>
                <p className="nome">{item.item.id} - {item.item.nome}</p>
                <article>
                  <p className="valorUni">{formataValor(item.item.valorVenda)}</p>
                  <p className="quantidade">{item.quantidade} uni</p>
                  <p className="valorTotal">{formataValor(item.item.valorVenda * item.quantidade)}</p>
                </article>
              </section>
              
            </S.ItemLista>
          );
        })
      ) : (
        <p>Adicione produtos ao carrinho</p>
      )}
    </S.Container>
  );
};

export default Carrinho;
