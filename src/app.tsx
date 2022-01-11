/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import { APIState } from './Context/ApiContext/ApiContext';
import Routes from './Routes/routes';
import { api} from './Services/api'

const App = () => {

    const {state, dispatch} = useContext(APIState);
    const {apiUpdate} = state
    const setAPI = (dadosApi: any) => {
      dispatch({
        type: "REQUEST",
        payload: { ...dadosApi },
      });
    };
  
    useEffect(() => {
      Promise.all([
        api.get("/usuarios"),
        api.get("/produtos"),
        api.get("/cupons"),
        api.get("/marcas"),
        api.get("/categorias"),
        api.get("/vendas"),
        api.get("/fornecedores"),
        api.get("/administracao"),
        api.get("/caixas"),

      ]).then((response) => {
        const dadosApi = {
          usuarios: response[0].data,
          produtos: response[1].data,
          cupons: response[2].data,
          marcas: response[3].data,
          categorias: response[4].data,
          vendas: response[5].data,
          fornecedores: response[6].data,
          administracao: response[7].data,
          caixas: response[8].data
        };
        setAPI(dadosApi);
      });
    }, []);
  
    useEffect(() => {
      Promise.all([
        api.get("/usuarios"),
        api.get("/produtos"),
        api.get("/cupons"),
        api.get("/marcas"),
        api.get("/categorias"),
        api.get("/vendas"),
        api.get("/fornecedores"),
        api.get("/administracao"),
        api.get("/caixas"),

      ]).then((response) => {
        const dadosApi = {
          usuarios: response[0].data,
          produtos: response[1].data,
          cupons: response[2].data,
          marcas: response[3].data,
          categorias: response[4].data,
          vendas: response[5].data,
          fornecedores: response[6].data,
          administracao: response[7].data,
          caixas: response[8].data
        };
        setAPI(dadosApi);
      });
    }, [apiUpdate]);
    return (
        <div>
            <Routes/>
        </div>
    )
}

export default App