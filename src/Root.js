import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

/////---- routes----////
import App from './App.js'
import MainPage from './mainpage/mainpage.js'
import SoilInfo from './rainfall/rainfall.js'
import UserInput from './user-input/user-input.js'
import Model from './model/model.js'
import SimpleResults from './simple-results/simple-results.js'
import Optimize from './optimization/optimize'
const Routing = (props) => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/home" component={MainPage}/>
        <Route path="/soil-info" component={SoilInfo}/>
        <Route path="/user-input" component={UserInput}/>
        <Route path="/model" component={Model}/>
        <Route path="/simple-results" component={SimpleResults}/>
        <Route path="/optimization" component={Optimize}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default (Routing)
