import * as S from "./Produtos.styles";
import ProdutosView from "./ProdutosView/ProdutosView";
import { useState } from "react";

const Produtos = () => {
  const [viewProducts, setViewProducts] = useState(true);

  return (
    <S.Container>
      <S.Tabs>
        <div 
        className={viewProducts ? 'active': ''}
        onClick={() => setViewProducts(true)}>PRODUTOS</div>
        <div 
        className={!viewProducts ? 'active': ''}
        onClick={() => setViewProducts(false)}>CUPONS</div>
      </S.Tabs>
      <S.Content>{viewProducts ? <ProdutosView /> : "cupons"}</S.Content>
    </S.Container>
  );
};

export default Produtos;
