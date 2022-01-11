import * as S from "./Produtos.styles";
import ProdutosView from "./ProdutosView/ProdutosView";
import { useState } from "react";
import Coupons from "../Coupons/Coupons";
import Configuracoes from "./Configuracoes/Configuracoes";

const Produtos = () => {
  const [viewProducts, setViewProducts] = useState(true);
  const [viewCupons, setViewCupons] = useState(false);
  const [viewSetting, setViewSetting] = useState(false);

  return (
    <S.Container>
      <S.Tabs>
        <div
          className={viewProducts ? "active" : ""}
          onClick={() => {
            setViewProducts(true);
            setViewCupons(false);
            setViewSetting(false);
          }}
        >
          Produtos
        </div>
        <div
          className={viewCupons ? "active" : ""}
          onClick={() => {
            setViewProducts(false);
            setViewCupons(true);
            setViewSetting(false);
          }}
        >
          Cupons
        </div>
        <div
          className={viewSetting ? "active" : ""}
          onClick={() => {
            setViewProducts(false);
            setViewCupons(false);
            setViewSetting(true);
          }}
        >
          Configurações
        </div>
      </S.Tabs>
      <S.Content>
        {viewProducts ? (
          <ProdutosView />
        ) : viewCupons ? (
          <Coupons />
        ) : (
          <Configuracoes defaultOption='active'/>
        )}
      </S.Content>
    </S.Container>
  );
};

export default Produtos;
