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
        api.get("/clientes"),
        api.get("/fornecedores"),
        api.get("/produtos"),
        api.get("/cupons"),
        api.get("/marcas"),
        api.get("/categorias"),
        api.get("/compras"),
      ]).then((response) => {
        const dadosApi = {
          clientes: response[0].data,
          fornecedores: response[1].data,
          produtos: response[2].data,
          cupons: response[3].data,
          marcas: response[4].data,
          categorias: response[5].data,
          compras: response[6].data,
        };
        setAPI(dadosApi);
      });
    }, []);
  
    useEffect(() => {
      Promise.all([
        api.get("/clientes"),
        api.get("/fornecedores"),
        api.get("/produtos"),
        api.get("/cupons"),
        api.get("/marcas"),
        api.get("/categorias"),
        api.get("/compras"),
      ]).then((response) => {
        const dadosApi = {
          clientes: response[0].data,
          fornecedores: response[1].data,
          produtos: response[2].data,
          cupons: response[3].data,
          marcas: response[4].data,
          categorias: response[5].data,
          compras: response[6].data,
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