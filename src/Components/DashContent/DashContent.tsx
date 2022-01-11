import React from "react";
import * as S from "./DashContent.styles";
import { Switch, Route } from "react-router-dom";
import DashHome from "../DashHome/DashHome";
import Entradas from "../Entradas/Entradas";
import Saidas from "../Saidas/Saidas";
import Produtos from "../Produtos/Produtos";
import Clientes from "../Clientes/Clientes";
import Funcionarios from "../Funcionarios/Funcionarios";
import AdicionarProduto from "../Produtos/AdicionarProduto/AdicionarProduto";
import CaixaRegistradora from "../CaixaRegistradora/CaixaRegistradora";

const DashContent = () => {
  return (
    <S.Container>
      <Switch>
        <Route exact path='/dashboard/home' component={DashHome}/>
        <Route exact path='/dashboard/entradas' component={Entradas}/>
        <Route exact path='/dashboard/saidas' component={Saidas}/>
        <Route exact path='/dashboard/produtos' component={Produtos}/>
        <Route exact path='/dashboard/novoproduto' component={AdicionarProduto}/>
        <Route exact path='/dashboard/clientes' component={Clientes}/>
        <Route exact path='/dashboard/funcionarios' component={Funcionarios}/>
        <Route exact path='/dashboard/caixa' component={CaixaRegistradora}/>
      </Switch>
    </S.Container>
  );
};

export default DashContent;
