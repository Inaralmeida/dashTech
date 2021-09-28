import * as S from "./AdicionarProduto.styles";

import { FormProvider } from "../../../Context/FormProvider/ContextProvider";
import FormNovoProduto from "./FormNovoProduto/FormNovoProduto";
import { useContext } from "react";
import { APIState } from "../../../Context/ApiContext/ApiContext";

const AdicionarProduto = () => {
  
const {dispatch} = useContext(APIState)

const setAPI = (value: boolean) => {
  dispatch({
    type: "RELOADING",
    payload: value ,
  });
};

  return (
    <FormProvider>
      <S.Container>
        <header>Adicionar Novo Produto</header>
        <main>
         <FormNovoProduto setAPI={setAPI}/>
        </main>
      </S.Container>
    </FormProvider>
  );
};

export default AdicionarProduto;
