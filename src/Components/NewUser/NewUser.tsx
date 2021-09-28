import { useContext, useState } from "react";
import * as S from "./NewUser.styles";
import Button from "../Common/Form/Button/Button";
import FormDadosPessoais from "./FormDadosPessoais/FormDadosPessoais";
import FormDadosLogon from "./FormDadosLogon/FormDadosLogon";
import FormDadosEndereco from "./FormDadosEndereco/FormDadosEndereco";
import FormTermsAcepted from "./FormTermsAcepted/FormTermsAcepted";
import { BsCheckCircle, BsCircle } from "react-icons/bs";
import { ThemeContext } from "styled-components";
import { FormProvider } from "../../Context/FormProvider/ContextProvider";
const NewUser = () => {
  const theme = useContext(ThemeContext);
  const [stageForm, setStageForm] = useState<any>({
    1: {
      finalized: false,
    },
    2: {
      finalized: false,
    },
    3: {
      finalized: false,
    },
    4: {
      finalized: false,
    },
  });
  const [atualStage, setAtualStage] = useState(1);

  const handleNext = () => {
    setStageForm({ ...stageForm, [atualStage]: { finalized: true } });

    setAtualStage(atualStage + 1);
    console.log(atualStage);
  };
  const handleback = () => {
    setStageForm({ ...stageForm, [atualStage]: { finalized: false } });

    setAtualStage(atualStage === 1 ? 1 : atualStage - 1);
    console.log(atualStage);
  };

  return (
    <FormProvider>
      <S.Container>
        <S.Content>
          <S.Stages>
            <div>
              {stageForm["1"].finalized ? (
                <BsCheckCircle size={40} color={theme.success} />
              ) : (
                <BsCircle size={30} color={theme.secundary} />
              )}
            </div>
            <div>
              {stageForm["2"].finalized ? (
                <BsCheckCircle size={40} color={theme.success} />
              ) : (
                <BsCircle size={30} color={theme.secundary} />
              )}
            </div>
            <div>
              {stageForm["3"].finalized ? (
                <BsCheckCircle size={40} color={theme.success} />
              ) : (
                <BsCircle size={30} color={theme.secundary} />
              )}
            </div>
            <div>
              {stageForm["4"].finalized ? (
                <BsCheckCircle size={40} color={theme.success} />
              ) : (
                <BsCircle size={30} color={theme.secundary} />
              )}
            </div>
          </S.Stages>

          <S.Forms>
            {atualStage === 1 ? (
              <FormDadosPessoais />
            ) : atualStage === 2 ? (
              <FormDadosLogon />
            ) : atualStage === 3 ? (
              <FormDadosEndereco />
            ) : (
              <FormTermsAcepted />
            )}
          </S.Forms>
          <S.Buttons>
            <Button
              size={10}
              text="Voltar"
              type="warning"
              onclick={handleback}
            />
            {atualStage === 4 ? (
              <Button
                size={10}
                text="finalizar"
                type="success"
                onclick={() => console.log("voltar")}
              />
            ) : (
              <Button
                size={10}
                text="Proximo"
                type="filled"
                onclick={handleNext}
              />
            )}
          </S.Buttons>
        </S.Content>
      </S.Container>
    </FormProvider>
  );
};

export default NewUser;
