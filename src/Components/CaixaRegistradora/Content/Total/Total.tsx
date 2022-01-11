/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { formataValor } from "../../../../Utils/formataValor";
import * as S from "./Total.styles";

export const Total = ({ venda, setVenda, addItem}: any) => {

  const [valorDesconto, setValorDesconto] = useState(0)
  const [subTotal, setSubTotal] = useState(0)

    useEffect(()=>{

      const desconto  = venda.desconto / 100

        const sub = venda.itens.map((item:any)=>{
            return item.item.valorVenda * item.quantidade
        })


        const valorBruto = venda.itens.map((item:any)=>{
          return item.item.valorBruto * item.quantidade
        })

        const vb = valorBruto.length > 0 ? valorBruto.reduce((a:number, b:number) => a + b) : 0

        const tot = sub.length > 0 ? sub.reduce((a:number, b:number) => a + b) : 0

        setValorDesconto(tot * desconto)
        setSubTotal(tot)
        setVenda({...venda, valores:{
          valorCompra: vb,
          valorVenda: tot - (tot * desconto),
          valorLiquido: Math.trunc(tot - (vb - (tot * desconto)))
        }})
    }, [setVenda, addItem])
  return (
    <S.Container>
      <S.ItemLista>
        <p>Subtotal:</p>
        <p>{formataValor(subTotal)}</p>
      </S.ItemLista>
      <S.ItemLista>
        <p>Desconto:</p>
        <p>{formataValor(valorDesconto)}</p>
      </S.ItemLista>
      <S.ItemLista>
        <p className='total'>Total:</p>
        <p className='total'>{formataValor(venda.valores.valorVenda)}</p>
      </S.ItemLista>
    </S.Container>
  );
};
