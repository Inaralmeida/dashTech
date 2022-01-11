import React, { useContext, useState } from "react";
import * as S from "./Busca.styles";
import { IoAdd, IoRemove, IoCheckmarkCircleSharp } from "react-icons/io5";
import { ThemeContext } from "styled-components";

const Busca = ({ handleAddItem, produtos}: any) => {
  const theme = useContext(ThemeContext);

  const [valueInput, setValueInput] = useState("");
  const [produtoEncontrado, setProdutoEncontrado] = useState(false);
  const [listaFiltrada, setListaFiltrada] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState<any>({});
  const [quantidade, setQuantidade] = useState(1);

  const handleBusca = (e: any) => {
    const value = e.target.value;
    setValueInput(value);
    // eslint-disable-next-line array-callback-return
    const lista = produtos.filter((produto: any) => {
      if (String(produto.id).includes(value)) {
        return produto;
      } else if (produto.nome.toUpperCase().includes(value.toUpperCase())) {
        return produto;
      }
    });

    setProdutoEncontrado(false);
    setListaFiltrada(lista);
  };

  const handleSelectItem = (e: any, item: any) => {
    setValueInput(e.target.id);
    setProdutoSelecionado(item);
    setProdutoEncontrado(true);
    console.log(produtoSelecionado);
  };


  const handleAddCart = () =>{

   

    const prod = {
      item: produtoSelecionado,
      quantidade: quantidade
    }
    handleAddItem(prod)
    setQuantidade(1)
    setValueInput('')
    setProdutoSelecionado({})
    setProdutoEncontrado(false)
    
  }

  return (
    <S.Container>
      <input 
      type="text" 
      value={valueInput} 
      onChange={handleBusca} 
      placeholder='Busque pelo Código ou Nome do produto'
      />

      <S.Quantidade>
        <IoAdd
          color={theme.success}
          size={25}
          cursor="pointer"
          onClick={() => setQuantidade(quantidade + 1)}
        />

        <p>{quantidade}</p>
        <IoRemove
          color={theme.warning}
          size={25}
          cursor="pointer"
          onClick={() => {
            const value = quantidade === 1 ? 1 : quantidade - 1;
            setQuantidade(value);
          }}
        />
      </S.Quantidade>

      <IoCheckmarkCircleSharp 
      color={theme.success}
      size={40}
      cursor="pointer"
      onClick={handleAddCart}
      />

      {valueInput.length > 0 && !produtoEncontrado && (
        <S.Dropdown>
          {listaFiltrada.map((item: any) => (
            <S.ItemLista
              onClick={(e) => handleSelectItem(e, item)}
              id={item.nome}
              key={item.id}
            >
              {item.id} - {item.nome}
            </S.ItemLista>
          ))}
        </S.Dropdown>
      )}
    </S.Container>
  );
};

export default Busca;
