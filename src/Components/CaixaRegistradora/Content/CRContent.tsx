import { useContext, useEffect, useState } from "react";
import { APIState } from "../../../Context/ApiContext/ApiContext";

import * as S from "./CRContent.styles";
import { geraCodigoProduto } from "../../../Utils/geraCodigoProduto";
import { dataAtual } from "../../../Utils/datas";
import Busca from "./Busca/Busca";
import Carrinho from "./Carrinho/Carrinho";
import { Total } from "./Total/Total";
import Informacoes from "./Informacoes/Informacoes";

const CRContent = () => {
  const {
    state: {
      api: { produtos },
    },
  } = useContext(APIState);
 
  const [addItem, setAddItem] = useState(false)
  const [venda, setVenda] = useState<any>({
    id: geraCodigoProduto(),
    idCaixa: 0,
    nfp: 0,
    desconto: 0,
    valores:{
      valorVenda: 0,
      valorLiquido: 0,
      valorCompra: 0,

    },
    itens: [],
    clienteCpf: '',
    data: dataAtual(),
    tipoCompra: ''
  })

  const handleAddItem = (item:any) =>{
    venda.itens.push(item)
    setAddItem(!addItem)
  }

  const handleAddValores = (data:any)=>{
    setVenda({...venda, valores: {data}})
    console.log(venda)
  }


  return (
    <S.Container>
      <div className="busca">
        <Busca handleAddItem={handleAddItem} produtos={produtos} handleAddValores={handleAddValores} valores={venda.valores}/>
      </div>
      <div className="carrinho">
        <Carrinho itens={venda.itens} addItem={addItem}/>
      </div>
      <div className="infos">
        <Informacoes venda={venda} setVenda={setVenda}  addItem={addItem} setAddItem={setAddItem}/>
      </div>
      <div className="total">
        <Total venda={venda} setVenda={setVenda} addItem={addItem}/>
      </div>
      <div className="pagamento"></div>
      <div className="botoes"></div>

    </S.Container>
  );
};

export default CRContent;
