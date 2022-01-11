import { createContext, useReducer } from "react"
import APIReducer from "./ApiReducer"

const InitialStateAPI: any = {
    loading: false,
    api:{
        usuarios:[],
        marcas: [],
        cupons: [],
        produtos: [],
        categorias: [],
        vendas: [],
        administracao: {},
        fornecedores: [],
        caixas: []
    },
    apiUpdate: false

    }

export const APIState = createContext(InitialStateAPI)

export const APIProvider = ({children}: any)=>{
    const [state, dispatch] = useReducer(APIReducer, InitialStateAPI)

    return(
        <APIState.Provider value={{state, dispatch}}>
            {children}
        </APIState.Provider>
    )
}