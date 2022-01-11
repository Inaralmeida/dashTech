import { formataValor } from "../../../Utils/formataValor";
import * as S from "./ItemCarrinho.styles";

interface IItemCarrinhoProps {
  item: {
    quantidade: number;
    produto: any;
  };
}

const ItemCarrinho = ({ item }: IItemCarrinhoProps) => {
  const { produto, quantidade } = item;
  return (
    <S.Container>
      <section>
        <p>
          <span>{produto.id}</span> - <span>{produto.nome}</span>
        </p>
        <p>
          <span>{quantidade}</span> X <span>{produto.valorVenda}</span>
        </p>
      </section>

      <p>{formataValor(produto.valorVenda * quantidade)}</p>
    </S.Container>
  );
};

export default ItemCarrinho;
