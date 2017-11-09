import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import './model.css';
import styles from './style.json'
import queryString  from 'query-string'


class UserInput extends Component {
  renderModelButton () {
    if(true) {
      const coordObj = (queryString.parse(this.props.location.search))
      return <RaisedButton
        label="Model"
        href={`/model?lat=${Number(coordObj.lat)}&lng=${Number(coordObj.lng)}`}
        />;
    } else {
      return <RaisedButton label="Model" disabled />;
    }
  }

  render() {
    return (
      <MuiThemeProvider>
      <div>
        <header>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"/>
        </header>
        <AppBar title="the coffee app" style={styles.appbarStyle} iconElementLeft={<div className="header-logo"/>}/>
        <div className="form-body">
          <Paper className="user-input-frame"zDepth={3}>
          <div className="form"/>
          <div className="model-button">
            {this.renderModelButton()}
          </div>
          </Paper>
        </div>
      </div>
    </MuiThemeProvider>
    );
  }
}


//
export default (UserInput);;
