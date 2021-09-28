import { useContext, useState } from "react";
import Input from "../../Components/Common/Form/Input/Input";
import { APIState } from "../../Context/ApiContext/ApiContext";
import MessageError from "../../Components/Common/Form/MessageError/MessageError";
import Button from "../../Components/Common/Form/Button/Button";
import {Redirect} from 'react-router-dom'
import * as S from "./Login.styles";
import logoDark from '../../assets/img/LogoDark2.png'

const Login = () => {
  const {
    state: {
      api: { usuarios },
    },
  } = useContext(APIState);

  const [form, setForm] = useState<any>({
    errorLogin: false,
    username: {
      value: "",
      error: false,
    },
    senha: {
      value: "",
      error: false,
    },
  });
  const [redirectTo, setRedirectTo] = useState<any>(null)



  const handleLogin = (e: any): void => {
    e.preventDefault();

    // eslint-disable-next-line array-callback-return
    const login = usuarios.filter((user: any)=>{
      return user.id.toUpperCase() === form.username.value.toUpperCase()
     
    })

    if (login.length === 0) setForm({...form, errorLogin: true})
    else if(login[0].logon.senha !== form.senha.value) setForm({...form, errorLogin: true})
    else{
      localStorage.setItem('user', login[0].logon.username)
      localStorage.setItem('token', login[0].logon.token)
      localStorage.setItem('nome', login[0].pessoal.nome)
      setRedirectTo('/dashboard/home')
    }
    console.log(login);
  };


  if(redirectTo){
    return(
      <Redirect to={redirectTo}/>
    )
  }

  return (
    <S.Container>
      <S.Section>
        <img src={logoDark} alt="Octaplanning logo" />
        <h1>OCTOPLANNING</h1>
      </S.Section>
      <S.SectionForm>
        <S.Form>
          <Input
            name="Username"
            placeholder="Digite seu username"
            error={form.username.error}
            value={form.username.value}
            messageError="Digite pelo menos 3 dígitos"
            onchange={(e) => {
              setForm({
                ...form,
                username: { ...form.username, value: e.target.value },
              });
            }}
          />
          <Input
            name="Password"
            type={"password"}
            placeholder="Digite sua senha"
            error={form.senha.error}
            value={form.senha.value}
            messageError="A senha deve conter no mínimo 8 dígitos"
            onchange={(e) => {
              setForm({
                ...form,
                senha: { ...form.senha, value: e.target.value },
              });
            }}
          />

          {form.errorLogin && (
            <MessageError message="Usuario ou senha incorretos" />
          )}

          <Button type="filled" text="Login" size={80} onclick={handleLogin} />
          <p>Ainda não é cadastrado? <a href='/login/newuser'>Clique aqui</a> e cadastre-se</p>
        </S.Form>
      </S.SectionForm>
    </S.Container>
  );
};

export default Login;
