import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NewUser from "../Components/NewUser/NewUser";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import GlobalStyles from "../Styles/GlobalStyles";
import { themeDefault } from "../Styles/Theme";

const Routes = () => {
  return (
   
      <Router>
        <ThemeProvider theme={themeDefault}>
          <GlobalStyles />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path='/login/newuser' component={NewUser}/>
          </Switch>
        </ThemeProvider>
      </Router>
  );
};

export default Routes;
