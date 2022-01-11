/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";
import { APIState } from "../../../../Context/ApiContext/ApiContext";
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

interface IFormNovoProdutoProps {
  setAPI: (e: any) => void;
}

const FormNovoProduto = ({ setAPI }: IFormNovoProdutoProps) => {
  const [marcas, setMarcas] = useState(marcaVazia);
  const [redirect, setRedirect] = useState<any>(null);
  const [produtoState, setProdutoState] = useState({
    id: geraCodigoProduto(),
    nome: "",
    url: "",
    descricao: "",
    categoriaId: "",
    valorBruto: '',
    valorVenda: '',
    estoque: '',
    adicionadoEm: dataAtual(),
  });

  const {
    state: {
      api: { fornecedores, categorias },
    },
  } = useContext(APIState);

  const setProduto = (key: string, value: any) => {
    setProdutoState({...produtoState, [key]: value})
  };

  useEffect(() => {
    const marcas = categorias.filter(
      (categoria: any) => categoria.id === produtoState.categoriaId && categoria.marcas
    );

    marcas.length > 0 ? setMarcas(marcas[0].marcas) : setMarcas(marcaVazia);
  }, [produtoState.categoriaId, categorias]);

  const handleSalvar = () => {
    const data = {
      ...produtoState,
      estoque: formataNumero(produtoState.estoque),
      valorBruto: formataNumero(produtoState.valorBruto),
      valorVenda: formataNumero(produtoState.valorVenda),
    };

    api.post("/produtos", data).then((response) => {
      if (response.status === 201) {
        setAPI(true);
        setRedirect("/dashboard/produtos");
        setAPI(false);
      }
    });
  };
  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <>
      <S.Container>
        <form>
          <div className="input-foto">
            <S.FotoContainer url={produtoState.url} />
          </div>
          <div className="input-nome">
            <InputUnderline
              label="Nome"
              name="nome"
              value={produtoState.nome}
              onchange={({ target }) => setProduto(target.name, target.value)}
            />
          </div>
          <div className="input-id">
            <InputUnderline
              label="Código do Produto"
              disabled={true}
              name="id"
              value={produtoState.id}
              onchange={({ target }) => setProduto(target.name, target.value)}
            />
          </div>
          <div className="input-data">
            <InputUnderline
              label="Data"
              disabled={true}
              name="adicionadoEm"
              value={produtoState.adicionadoEm}
              onchange={({ target }) => setProduto(target.name, target.value)}
            />
          </div>
          <div className="input-qtd">
            <InputUnderline
              label="Quantidade"
              name="estoque"
              value={produtoState.estoque}
              onchange={({ target }) => setProduto(target.name, target.value)}
            />
          </div>
          <div className="input-url">
            <InputUnderline
              label="URL da Foto"
              name="url"
              value={produtoState.url}
              onchange={({ target }) => setProduto(target.name, target.value)}
            />
          </div>
          <div className="input-pb">
            <InputUnderline
              label="Preço de Compra"
              name="valorBruto"
              value={produtoState.valorBruto}
              onchange={({ target }) => setProduto(target.name, target.value)}
            />
          </div>
          <div className="input-pv">
            <InputUnderline
              label="Preço de Venda"
              name="valorVenda"
              value={produtoState.valorVenda}
              onchange={({ target }) => setProduto(target.name, target.value)}
            />
          </div>
          <div className="input-descricao">
            <TextArea
              name="descricao"
              value={produtoState.descricao}
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
              disabled={produtoState.categoriaId ? false : true}
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
            onclick={() => setRedirect('/dashboard/produtos')}
            size={10}
            type="warning"
            text='Cancelar'
          >
          </Button>
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
