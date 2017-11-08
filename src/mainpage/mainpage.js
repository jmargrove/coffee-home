import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import './mainpage.css';
import MapLoad from './../map-load/map-load.js'
import styles from './style.json'
import { connect } from 'react-redux';
import { postReq } from './../action/actions.js';

const mapDispatchTo = (dispatch) => ({
  postreq: (dt) => dispatch(postReq(dt))
})

const mapImagesTo = (state) => ({
  data: state.data,
  coords: state.coords
})

class MainPage extends Component {


  renderDataButton () {
    if(this.refs.latitude && this.refs.longitude) {

      return <RaisedButton
        label="Data"
        href={`/rainfall?lat=${this.props.coords.lat}&lng=${this.props.coords.lng}`}
        />;
    } else {
      return <RaisedButton label="Data" disabled />;
    }
  }

  render() {
    console.log(this.props.data)
    return (
      <MuiThemeProvider>
      <div>
        <header>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"/>
        </header>
        <div>
        <AppBar title="the coffee app" style={styles.appbarStyle} iconElementLeft={<div className="header-logo"/>}/>
        </div>
        <div className="container3">
          <div className="select-location-text">S e l e c t - L o c a t i o n</div>
          <form className="coord-box">
            <label>X:</label>
              <input ref="longitude" className="ycoord" value={Math.round(this.props.coords.lng*1000)/1000} readOnly/>
            <label>Y:</label>
              <input ref="latitude" className="xcoord" value={Math.round(this.props.coords.lat*1000)/1000} readOnly/>
            {this.renderDataButton()}
          </form>
          <div>
          <Paper style={styles.style} zDepth={1}>
            <MapLoad/>
          </Paper>
          </div>
      </div>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default connect(mapImagesTo, mapDispatchTo)(MainPage);
