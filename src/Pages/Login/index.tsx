import { useContext, useState } from "react";
import Input from "../../Components/Common/Form/Input/Input";
import { APIState } from "../../Context/ApiContext/ApiContext";
import MessageError from "../../Components/Common/Form/MessageError/MessageError";
import Button from "../../Components/Common/Form/Button/Button";
import {Redirect} from 'react-router-dom'
import * as S from "./Login.styles";

const Login = () => {
  const {
    state: {
      api: { clientes },
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
    clientes.map((cliente: any): void=>{
      if(cliente.logon.username.toUpperCase() === form.username.value.toUpperCase()){
        console.log(cliente.logon.username,form.username.value, cliente.logon.senha, form.senha.value)
        if(cliente.logon.senha.toUpperCase() === form.senha.value.toUpperCase()){
          if(form.senha.value !== '' && form.username.value !== ''){
            setForm({...form, errorLogin: false})
            localStorage.setItem('username', form.username.value)
            localStorage.setItem('token', cliente.logon.token)
            setRedirectTo('/dashboard')
          }
        }else{
          setForm({...form, errorLogin: true})
        }
      }else{
        setForm({...form, errorLogin: true})
      }
     
    })
    console.log(form);
  };


  if(redirectTo){
    return(
      <Redirect to={redirectTo}/>
    )
  }

  return (
    <S.Container>
      <S.Section>
        <h1>STORE TECH</h1>
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

          <Button type="submit" text="Login" size={80} onclick={handleLogin} />
          <p>Ainda não é cadastrado? <a href='/login/newuser'>Clique aqui</a> e cadastre-se</p>
        </S.Form>
      </S.SectionForm>
    </S.Container>
  );
};

export default Login;
