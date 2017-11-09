import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import './load-page.css';
import styles from './style.json'
import queryString  from 'query-string'
import CircularProgress from 'material-ui/CircularProgress';

class Loader extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <header>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"/>
        </header>
        <AppBar title="the coffee app" style={styles.appbarStyle} iconElementLeft={<div className="header-logo"/>}/>
        <div className="loader-body">
          <CircularProgress size={200} thickness={15} color="black"/>
        </div>
      </div>
    </MuiThemeProvider>
    );
  }
}


//
export default (Loader);;
