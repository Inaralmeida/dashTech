import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import CaixaRegistradora from "../Components/CaixaRegistradora/CaixaRegistradora";
import NewUser from "../Components/NewUser/NewUser";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import GlobalStyles from "../Styles/GlobalStyles";
import { themeDefault } from "../Styles/Theme";

const Routes = () => {
  return (
   
      <Router>
        <ThemeProvider theme={themeDefault}>
          <GlobalStyles />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard/:title" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path='/login/newuser' component={NewUser}/>
            <Route exact path='/caixa' component={CaixaRegistradora}/>
          </Switch>
        </ThemeProvider>
      </Router>
  );
};

export default Routes;
