import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import styles from './style.json'
import queryString  from 'query-string'
import { connect } from 'react-redux'
import Loader from './../load-page/load-page.js'
import { modelData } from './../action/actions'
import Yield from './../graphs/coffee-yeild.js'
import './simple-results.css'
import { Link } from 'react-router-dom'

const mapDispatchTo = (dispatch) => ({
  modelDataDisp: (dt) => dispatch(modelData(dt))
})

const mapStateData = (state) => ({
  modelData: state.modelData,
  userData: state.userDataInput,
})

class SimpleResults extends Component {
  // renderModelButton () {
  //   if(true) {
  //     const coordObj = (queryString.parse(this.props.location.search))
  //     return <RaisedButton
  //       label="Model Stats"
  //       href={`/model?lat=${Math.round(Number(coordObj.lat)*100)/100}
  //       &lng=${Math.round(Number(coordObj.lng)*100)/100}
  //       &yield=${Math.round(Number(this.props.yieldValue))}
  //       &shade=${Number(this.props.shadeValue)}
  //       &irr=${Number(this.props.irrigationValue)}
  //       &slope=${Number(this.props.slopeValue)}
  //       `}
  //       />;
  //   } else {
  //     return <RaisedButton label="Model" disabled />;
  //   }
  // }

  renderOptimizationButton () {
    const coordObj = (queryString.parse(this.props.location.search))
    console.log("un parsed stuff", coordObj)
    return <Link to={`/optimization?lat=${Number(coordObj.lat)}&lng=${Number(coordObj.lng)}`}>
      <RaisedButton label="Optimize Farm"/>
    </Link>
  }

  state = {
    loading: false,
  }

  postCoordsModel(coords){
    this.setState({ loading: true });
    fetch('http://localhost:8080/model-data', {
      body: JSON.stringify({
        xcoord: coords.lng,
        ycoord: coords.lat,
        userShadeValue: this.props.userData.shadeValue,
        userIrrValue: Number(this.props.userData.irrigationValue),
        userSlopeValue: this.props.userData.slopeValue,
      }),
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

  searchInfo = queryString.parse(this.props.location.search)
  render() {
    console.log("this props model",this.props.location.search)
    // if (!this.state.loading){
    return (
        <MuiThemeProvider>
        <div>
          <header>
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"/>
          </header>
          <AppBar title="the coffee app" style={styles.appbarStyle} iconElementLeft={<div className="header-logo"/>}/>
          <div className="modelData-body">
            <Paper className="model-frame" zDepth={3}>
              <div className="statement">
                Predicted coffee yield on first crop:
              </div>
              <div className="yield-circle-container">
                <div id="myGlower "className="key-yield-container">
                  <div className="key-yield-unit-container">
                    <div className="key-yield-number">
                    {Math.round(this.props.modelData[4].yield*10)/10}
                    </div>
                    <div className="key-yield-units">

                    </div>
                  </div>
                </div>
              </div>
              <div className="model-user-information">
                <div className="user-input">
                  <div className="yield-info">
                    User current yield: {Number(this.props.userData.yieldValue/10)}
                  </div>
                  <div className="shade-info">
                    User current shade: {Number(this.props.userData.shadeValue/10)}

                  </div>
                  <div className="irr-info">
                    User irrigating {Number(this.props.userData.irrigationValue)}
                  </div>
                  <div className="slope-info">
                    User slope: {Number(this.props.userData.slopeValue)}
                  </div>
                </div>
                <div className="more-modelling-options">
                  {this.renderOptimizationButton()}
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
    );
    // }
    // else {
    //   return (<Loader/>)
    // }
  }
}



export default connect(mapStateData, mapDispatchTo)(SimpleResults);;