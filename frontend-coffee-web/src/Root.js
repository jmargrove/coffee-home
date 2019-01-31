import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App.js";

import Landing from "./containers/Landing.js";
import MainPage from "./mainpage/mainpage.js";
import UserInput from "./user-input/user-input.js";
import SimpleResults from "./simple-results/simple-results.js";
import Optimize from "./optimize/optimize.js";

const Routing = props => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/landing" component={Landing} />
        <Route path="/home" component={MainPage} />
        <Route path="/user-input" component={UserInput} />
        <Route path="/simple-results" component={SimpleResults} />
        <Route path="/optimize" component={Optimize} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routing;
