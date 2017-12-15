import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App.js";
import MainPage from "./mainpage/mainpage.js";
import UserInput from "./user-input/user-input.js";
import SimpleResults from "./simple-results/simple-results.js";

const Routing = props => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/home" component={MainPage} />
        <Route path="/user-input" component={UserInput} />
        <Route path="/simple-results" component={SimpleResults} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routing;
