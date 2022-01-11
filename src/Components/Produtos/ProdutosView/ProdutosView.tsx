import * as S from "./ProdutosView.styles";
import { APIState } from "../../../Context/ApiContext/ApiContext";
import { useContext, useEffect, useState } from "react";
import Table from "../../Table/Table";
import { Link } from "react-router-dom";

const ProdutosView = () => {
  const {
    state: {
      api: { produtos },
    },
  } = useContext(APIState);
  const [valueInputCod, setValueInputCod] = useState("");
  const [valueInputName, setValueInputName] = useState("");
  const [produtosRender, setProdutosRender] = useState([]);
  const [sortBy, setSortBy] = useState([])

  //salvando os produtos no state para renderizar
  useEffect(() => {
    setProdutosRender(produtos);
  }, [produtos]);

  //headers da tabela
  const headers = [
    "Código",
    "Nome",
    "Preço",
    "Estoque",
    "Analises",
    "configurações",
  ];

  //funções de filtro
  const handleFilteredName = () => {
    if (valueInputName.length > 0) {
      const filtereds = produtos.filter((product: any) => {
        return product.nome
          .toUpperCase()
          .includes(valueInputName.toUpperCase());
      });
      setProdutosRender(filtereds);
    } else {
      setProdutosRender(produtos);
    }
  };
  const handleFilteredCod = () => {
    if (valueInputCod.length > 0) {
      const filtereds = produtos.filter((product: any) => {

        return String(product.id).includes(valueInputCod);
      });
      setProdutosRender(filtereds);
    } else {
      setProdutosRender(produtos);
    }
  };

  //atualização da tabela de a cordo com o filtro
  useEffect(() => {
    handleFilteredCod();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInputCod]);
  useEffect(() => {
    handleFilteredName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInputName]);

  useEffect(()=>{
    if(sortBy.length > 0 ){
      setProdutosRender(sortBy)
      setSortBy([])
    }
  },[sortBy])

  const handleSort = (by:any, type:any)=>{
    let data:any= []
    switch (by) {
      case 'Nome':
        if(type === 'up'){
          data = produtos.sort((a:any,b:any)=>{
            return a.nome < b.nome ? 1 : -1
          })
         setSortBy(data)

        }else{
          data = produtos.sort((a:any,b:any)=>{
            return a.nome > b.nome ? 1 : -1
          })
         setSortBy(data)

        }
        break
      case 'Preço':
        if(type === 'up'){
          data = produtos.sort((a:any,b:any)=>{
            return a.valorVenda < b.valorVenda ? 1 : -1
          })
         setSortBy(data)

        }else{
          data = produtos.sort((a:any,b:any)=>{
            return a.valorVenda > b.valorVenda ? 1 : -1
          })
         setSortBy(data)

        }
        break
      case 'Estoque':
        if(type === 'up'){
          data = produtos.sort((a:any,b:any)=>{
            return a.estoque < b.estoque ? 1 : -1
          })
         setSortBy(data)

        }else{
          data = produtos.sort((a:any,b:any)=>{
            return a.estoque > b.estoque ? 1 : -1
          })
         setSortBy(data)

        }
        break
      default:
        break;
    }
  }

  //ajustando produtos para mandar para tabela
  const produtosTable = produtosRender.map((produto: any) => {
    return {
      id: produto.id,
      name: produto.nome,
      price: produto.valorVenda,
      amount: produto.estoque,
    };
  });

  return (
    <S.Container>
      <header>
        {/* Campos de busca */}
        <fieldset>
          <div className="input">
            <label className={valueInputCod.length > 0 ? "active" : ""}>
              Código
            </label>
            <input
              required
              type="text"
              value={valueInputCod}
              onChange={({ target }) => setValueInputCod(target.value)}
            />
          </div>
          <div className="input">
            <label className={valueInputName.length > 0 ? "active" : ""}>
              Nome
            </label>
            <input
              required
              type="text"
              value={valueInputName}
              onChange={({ target }) => setValueInputName(target.value)}
            />
          </div>
        </fieldset>

        <Link className='link' to='/dashboard/novoproduto'>
          Novo Produto
        </Link>

        
      </header>
      <S.Content>
        <Table headers={headers} produtos={produtosTable}  handleSort={handleSort}/>
      </S.Content>
    </S.Container>
  );
};

export default ProdutosView;
