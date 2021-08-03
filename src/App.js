import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import SignUpContainer from "./containers/SignUpContainer";
import SignInContainer from "./containers/SignInContainer";
import HeaderContainer from "./containers/HeaderContainer";

function App() {
  return (
    <BrowserRouter>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route path="/SignIn" component={SignInContainer} />
        <Route path="/SignUp" component={SignUpContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
