import React, { useContext } from "react";
import { FormState } from "../../../Context/FormProvider/FormState";
import Input from "../../Common/Form/Input/Input";
import * as S from "./FormDadosPessoais.styles";

const FormDadosPessoais = () => {
  const {
    state: {
      cliente: { pessoal },
    },
    dispatch,
  } = useContext(FormState);
  console.log(pessoal);
  const setDadosPessoais = (key: string, value: any) => {
    dispatch({
      type: "ADD_NEW_DATA_PERSON",
      payload: { ...pessoal, [key]: value },
    });
  };
  return (
    <S.Container>
      <div className="nome">
        <Input
          value={pessoal.nome}
          onchange={({ target }) => setDadosPessoais(target.name, target.value)}
          name="nome"
          placeholder="Seu nome completo"
          error={false}
          messageError="ainda não sei"
        />
      </div>
      <div className="cpf">
      <Input
          value={pessoal.cpf}
          onchange={({ target }) => setDadosPessoais(target.name, target.value)}
          name="cpf"
          placeholder="Seu cpf "
          error={false}
          messageError="ainda não sei"
        />
      </div>
      <div className="email">
      <Input
          value={pessoal.email}
          onchange={({ target }) => setDadosPessoais(target.name, target.value)}
          type='email'
          name="email"
          placeholder="Seu email "
          error={false}
          messageError="ainda não sei"
        />
      </div>
      <div className="nascimento">
      <Input
          value={pessoal.nascimento}
          onchange={({ target }) => setDadosPessoais(target.name, target.value)}
          type='date'
          name="nascimento"
          placeholder="Seu nome completo"
          error={false}
          messageError="ainda não sei"
        />
      </div>
      <div className="telefone">
      <Input
          value={pessoal.telefone}
          onchange={({ target }) => setDadosPessoais(target.name, target.value)}
          name="telefone"
          placeholder="Seu telefone "
          error={false}
          messageError="ainda não sei"
        />
      </div>
      <div className="celular">
      <Input
          value={pessoal.celular}
          onchange={({ target }) => setDadosPessoais(target.name, target.value)}
          name="celular"
          placeholder="Seu celular "
          error={false}
          messageError="ainda não sei"
        />
      </div>
    </S.Container>
  );
};

export default FormDadosPessoais;
