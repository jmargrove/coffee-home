import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import './model.css';
import styles from './style.json'
import queryString  from 'query-string'
import { connect } from 'react-redux'
import Loader from './../load-page/load-page.js'
import { modelData } from './../action/actions'


const mapDispatchTo = (dispatch) => ({
  modelDataDisp: (dt) => dispatch(modelData(dt))
})

const mapStateData = (state) => ({
  modelData: state.modelData,
})


class Model extends Component {

  state = {
    loading: false,
  }

  postCoordsModel(coords){
    this.setState({ loading: true });
    fetch('http://localhost:8080/model-data', {
      body: JSON.stringify({xcoord: coords.lng, ycoord: coords.lat}),
      headers: {'Content-Type' : 'application/json'},
      method: 'POST',
    })
    .then(resp => resp.json())
    .then(r => {
      this.props.modelDataDisp(r)
      this.setState({ loading: false });
    })
  }
  componentDidMount(){
    this.postCoordsModel(queryString.parse(this.props.location.search))
  }

  render() {
    console.log("the props for rendering", this.props.modelData[0])
    if(!this.state.loading){
    return (
        <MuiThemeProvider>
        <div>
          <header>
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"/>
          </header>
          <AppBar title="the coffee app" style={styles.appbarStyle} iconElementLeft={<div className="header-logo"/>}/>
          <div className="form-body">
            <Paper className="user-input-frame"zDepth={3}>
              <div className="yeild6th-box">
                <div className="yeild6th">
              {this.props.modelData[1]}
                </div>
              </div>
              <div className="yeild6th-box">
                <div className="yeild6th">
              {this.props.modelData[2]}
                </div>
              </div>
              <div className="yeild6th-box">
                <div className="yeild6th">
              {this.props.modelData[3]}
                </div>
              </div>
              <div className="yeild6th-box">
                <div className="yeild6th">
              {this.props.modelData[4]}
                </div>
              </div>
              <div className="yeild6th-box">
                <div className="yeild6th">
              {this.props.modelData[5]}
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
      );
    }
    else {
      return(
        <Loader/>
      )
    }
  }
}


//
export default connect(mapStateData, mapDispatchTo)(Model);;
