import React, { Component } from 'react';
import Login from './login-page/login-page.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"/>
      </header>
      <Login/>
      </div>
    );
  }
}

export default App;
