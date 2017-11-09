import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
/////---- routes----////
import App from './App.js'
import MainPage from './mainpage/mainpage.js'
import Rainfall from './rainfall/rainfall.js'
import UserInput from './user-input/user-input.js'
import Model from './model/model.js'

import { connect } from 'react-redux';

const Routing = (props) => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/home" component={MainPage}/>
        <Route path="/rainfall" component={Rainfall}/>
        <Route path="/user-input" component={UserInput}/>
        <Route path="/model" component={Model}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default (Routing)
