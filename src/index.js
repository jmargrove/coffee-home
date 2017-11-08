import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducers/reducers';
import Routing  from './Root.js'

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

 ReactDOM.render(
   <Provider store={store}>
    <Routing store={store}/>
   </Provider>
, document.getElementById('root'));
