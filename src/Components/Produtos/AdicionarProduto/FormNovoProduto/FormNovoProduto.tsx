/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";
import { APIState } from "../../../../Context/ApiContext/ApiContext";
import { FormState } from "../../../../Context/FormProvider/FormState";
import { api } from "../../../../Services/api";
import { dataAtual } from "../../../../Utils/datas";
import { formataNumero } from "../../../../Utils/formataNumero";
import { geraCodigoProduto } from "../../../../Utils/geraCodigoProduto";
import Button from "../../../Common/Form/Button/Button";

import InputUnderline from "../../../Common/Form/InputUnderline/InputUnderline";
import SelectBasic from "../../../Common/Form/SelectBasic/SelectBasic";
import TextArea from "../../../Common/Form/TextArea/TextArea";
import * as S from "./FormNovoProduto.styles";
const marcaVazia: any = [
  {
    id: " ",
  },
];

interface IFormNovoProdutoProps{
  setAPI: (e: any)=>void
}

const FormNovoProduto = ({setAPI}:IFormNovoProdutoProps) => {
  const [marcas, setMarcas] = useState(marcaVazia);
  const [redirect, setRedirect] = useState<any>(null)
  
  const {
    state: { produto },
    dispatch,
  } = useContext(FormState);
  const {
    state: {
      api: { fornecedores, categorias },
    }
  } = useContext(APIState);
  const {
    id,
    nome,
    url,
    descricao,
    categoriaId,
    valorBruto,
    valorVenda,
    estoque,
  } = produto;

  const setProduto = (key: string, value: any) => {
    dispatch({
      type: "NEW_PRODUCT",
      payload: { ...produto, [key]: value },
    });
  };

  useEffect(() => {
    const marcas = categorias.filter(
      (categoria: any) => categoria.id === categoriaId && categoria.marcas
    );

    marcas.length > 0 ? setMarcas(marcas[0].marcas) : setMarcas(marcaVazia);
  }, [categoriaId, categorias]);

  useEffect(() => {
    setProduto("id", geraCodigoProduto());
  }, []);

  const handleSalvar = () => {
    const data = {
      ...produto,
      estoque: formataNumero(produto.estoque),
      valorBruto: formataNumero(produto.valorBruto),
      valorVenda: formataNumero(produto.valorVenda)
    }

    api.post('/produtos', data)
    .then((response)=>{
      if(response.status === 201){
        
        setAPI(true)
        setRedirect('/dashboard/produtos')
        setAPI(false)
        
      }
      
    })

    
   

  };
  if(redirect){
    return(
      <Redirect to={redirect}/>
    )
  }

  return (
    <>
      <S.Container>
        <form>
          <div className="input-foto">
            <S.FotoContainer url={url} />
          </div>
          <div className="input-nome">
            <InputUnderline
              label="Nome"
              name="nome"
              value={nome}
              onchange={({ target }) => setProduto(target.name, target.value)}
            />
          </div>
          <div className="input-id">
            <InputUnderline
              label="Código do Produto"
              disabled={true}
              name="id"
              value={id}
              onchange={({ target }) => setProduto(target.name, target.value)}
            />
          </div>
          <div className="input-data">
            <InputUnderline
              label="Data"
              disabled={true}
              name="adicionadoEm"
              value={dataAtual()}
              onchange={({ target }) => setProduto(target.name, target.value)}
            />
          </div>
          <div className="input-qtd">
            <InputUnderline
              label="Quantidade"
              name="estoque"
              value={estoque}
              onchange={({ target }) => setProduto(target.name, target.value)}
            />
          </div>
          <div className="input-url">
            <InputUnderline
              label="URL da Foto"
              name="url"
              value={url}
              onchange={({ target }) => setProduto(target.name, target.value)}
            />
          </div>
          <div className="input-pb">
            <InputUnderline
              label="Preço de Compra"
              name="valorBruto"
              value={valorBruto}
              onchange={({ target }) => setProduto(target.name, target.value)}
            />
          </div>
          <div className="input-pv">
            <InputUnderline
              label="Preço de Venda"
              name="valorVenda"
              value={valorVenda}
              onchange={({ target }) => setProduto(target.name, target.value)}
            />
          </div>
          <div className="input-descricao">
            <TextArea
              name="descricao"
              value={descricao}
              onchange={({ target }) => setProduto(target.name, target.value)}
              placeholder="Descrição do produto"
            />
          </div>
          <div className="input-fornecedores">
            <SelectBasic
              value={"fornecedorID"}
              options={fornecedores}
              onchange={(e: any) => setProduto(e.target.name, e.target.value)}
              label="Fornecedor"
            />
          </div>
          <div className="input-marcas">
            <SelectBasic
              value={"marcaId"}
              disabled={categoriaId ? false : true}
              options={marcas}
              onchange={(e: any) => setProduto(e.target.name, e.target.value)}
              label="Marca"
            />
          </div>
          <div className="input-categoria">
            <SelectBasic
              value={"categoriaId"}
              options={categorias}
              onchange={(e: any) => setProduto(e.target.name, e.target.value)}
              label="Categoria"
            />
          </div>
        </form>
        <footer>
          <Button
            onclick={() => console.log("salve")}
            size={10}
            text="Cancelar"
            type="warning"
          />
          <Button
            onclick={handleSalvar}
            size={10}
            text="Salvar"
            type="success"
          />
        </footer>
       
      </S.Container>
    </>
  );
};

export default FormNovoProduto;
