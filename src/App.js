import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//main page
import MainContainer from "./containers/MainContainer";

//sign page
import SignUpContainer from "./containers/SignUpContainer";
import SignInContainer from "./containers/SignInContainer";

//search result page
import CampingListContainer from "./containers/CampingListContainer";

//search list detail page

//404page
import Page404 from "./components/exception/Page404";

//img file
import Background from "./store/img/camping_bg2.jpeg";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${Background});
  background-size: cover;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route path="/SignIn" component={SignInContainer} />
          <Route path="/SignUp" component={SignUpContainer} />
          <Route path="/Search" component={CampingListContainer} />
          <Route component={Page404} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
