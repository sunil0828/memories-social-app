import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Auth from "./components/auth/Auth";

export default function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
