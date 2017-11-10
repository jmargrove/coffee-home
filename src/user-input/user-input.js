import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import './user-input.css';
import styles from './style.json'
import queryString  from 'query-string'
import Slider from 'material-ui/Slider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  slider: {
    trackSize : 1,
    handleSize: 12,
    trackColor: '#A63A50',
    rippleColor: 'red',
    selectionColor: 'black'}})



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
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <header>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"/>
        </header>
        <AppBar title="the coffee app" style={styles.appbarStyle} iconElementLeft={<div className="header-logo"/>}/>
        <div className="form-body">
          <Paper className="user-input-frame"zDepth={3}>
          <div className="user-location-info"> here I am</div>
          <div className="user-shanding-info">
            <div className="user-data-info">
                <div className="user-data-type">S h a d i n g :</div>
                <div className="user-data-value-container">
                  <div className="user-data-value">100</div>
                  <div className="user-data-unit">%</div>
                </div>
                <div className="shade-blank-space"></div>
            </div>
            <div className="mat-ui-slide-bar">

            </div>
          </div>
          <div className="user-irrigation-info"></div>
          <div className="user-yield-info"></div>
          <div className="user-slope-info"></div>
          <div className="additional-local-info"></div>

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
