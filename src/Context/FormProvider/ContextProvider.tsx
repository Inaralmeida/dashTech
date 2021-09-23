import { useReducer } from "react"
import { FormState, InitalState } from "./FormState"
import Reducer from "./reducer"

export const FormProvider = ({children}: any) =>{
    const [state, dispatch] = useReducer(Reducer, InitalState)

    return(
        <FormState.Provider value={{state, dispatch}}>
            {children}
        </FormState.Provider>
    )
}