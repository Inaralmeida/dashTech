/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import * as S from "./EditarProduto.styles";
import { APIState } from "../../../Context/ApiContext/ApiContext";
import Button from "../../Common/Form/Button/Button";
import { IoMdClose } from "react-icons/io";
import InputUnderline from "../../Common/Form/InputUnderline/InputUnderline";
import TextArea from "../../Common/Form/TextArea/TextArea";
import { api } from "../../../Services/api";
import { formataNumero } from "../../../Utils/formataNumero";
interface IEditarProdutoProps {
  id?: number;
  btnCancelFunc: () => void;
}

const EditarProduto = ({ id, btnCancelFunc }: IEditarProdutoProps) => {
  const {
    state: {
      api: { produtos },
    },
    dispatch,
  } = useContext(APIState);
  const produto = produtos.filter((produto: any) => produto.id === id);
  
  const [prodForm, setProdForm] = useState<any>({
    id: null,
    nome: "",
    url: "",
    descricao: "",
    categoriaId: 0,
    marcaId: 0,
    valorBruto: 0,
    valorVenda: 0,
    vendido: 0,
    estoque: 0,
    avaliacoes: [],
  });
  useEffect(() => {
    setProdForm({
      id: produto[0].id,
      nome: produto[0].nome,
      url: produto[0].url,
      descricao: produto[0].descricao,
      categoriaId: produto[0].categoriaId,
      marcaId: produto[0].marcaId,
      valorBruto: produto[0].valorBruto,
      valorVenda: produto[0].valorVenda,
      vendido: produto[0].vendido,
      estoque: produto[0].estoque,
      avaliacoes: [],
    });
  }, []);

  const setApi = (value: boolean) => {
    dispatch({
      type: "RELOADING",
      payload: value,
    });
  };

  const handleOnChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setProdForm({
      ...prodForm,
      [name]: value,
    });
  };

  const handleSalvar = () => {
    const data = {
      ...prodForm,
      valorVenda: formataNumero(prodForm.valorVenda),
      estoque: parseInt(prodForm.estoque),
    };
    api.patch(`/produtos/${id}`, data).then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        setApi(true);
        
        btnCancelFunc();
        setApi(false);
      } 
    });
  };

  return (
    <S.Container>
      
      <S.Content>
        <header>
          Editando
          <IoMdClose cursor="pointer" onClick={btnCancelFunc} />
        </header>
        <main>
          <div className="input-foto">
            <img src={prodForm.url} alt={prodForm.nome} />
          </div>
          <div className="input-nome">
            <InputUnderline
              label="Nome"
              name="nome"
              value={prodForm.nome}
              onchange={handleOnChange}
            />
          </div>
          <div className="input-url">
            <InputUnderline
              label="URL da Foto"
              name="url"
              value={prodForm.url}
              onchange={handleOnChange}
            />
          </div>
          <div className="input-preco">
            <InputUnderline
              label="Preço"
              name="valorVenda"
              value={prodForm.valorVenda}
              onchange={handleOnChange}
            />
          </div>
          <div className="input-qtd">
            <InputUnderline
              label="Quantidade em Estoque"
              name="estoque"
              value={prodForm.estoque}
              onchange={handleOnChange}
            />
          </div>
          <div className="input-desc">
            <TextArea
              placeholder="Descrição do produto"
              name="descricao"
              value={prodForm.descricao}
              onchange={handleOnChange}
            />
          </div>
        </main>
        <footer>
          <Button
            onclick={btnCancelFunc}
            size={20}
            text="Cancelar"
            type="warning"
          />
          <Button
            onclick={handleSalvar}
            size={20}
            text="Salvar"
            type="success"
          />
        </footer>
        
      </S.Content>
    </S.Container>
  );
};

export default EditarProduto;
