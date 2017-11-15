import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import './user-input.css';
import styles from './style.json'
import queryString  from 'query-string'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { shadePercentage } from './../action/actions.js'
import { yieldPerHa } from './../action/actions.js'
import { irrigationCheckBox } from './../action/actions.js'
import { slopePercentage } from './../action/actions.js'
import { connect } from 'react-redux'
import Checkbox from 'material-ui/Checkbox';
import { Link } from 'react-router-dom';
import UserInfoMap from './../user-info-map/user-info-map.js'


const mapDispatchTo = (dispatch) => ({
  yieldUpdate: (yields) => dispatch(yieldPerHa(yields)),
  shadeUpdate: (shade) => dispatch(shadePercentage(shade)),
  irrigationUpdate: (irr) => dispatch(irrigationCheckBox(irr)),
  slopeUpdate: (slope) => dispatch(slopePercentage(slope))
})

const mapStateToProps = (state) => ({
  yieldValue: state.userDataInput.yieldValue,
  shadeValue: state.userDataInput.shadeValue,
  irrigationValue: state.userDataInput.irrigationValue,
  slopeValue: state.userDataInput.slopeValue,
  address: state.address
})


class UserInput extends Component {
  coordObj = (queryString.parse(this.props.location.search))
  renderModelButton () {
    if(true) {
      const coordObj = (queryString.parse(this.props.location.search))
      return (
        <Link to={`/simple-results?lat=${Number(coordObj.lat)}&lng=${Number(coordObj.lng)}`}>
          <RaisedButton label="Model"/>
        </Link>
      );
    } else {
      return <RaisedButton label="Model" disabled />;
    }
  }

  renderSoilButton () {
    if(true) {
      const coordObj = (queryString.parse(this.props.location.search))
      return (
        <Link to={`/rainfall?lat=${Number(coordObj.lat)}&lng=${Number(coordObj.lng)}`}>
          <RaisedButton label="Soil-Info"/>
        </Link>
      );
    } else {
      return <RaisedButton label="Run Model" disabled />;
    }
  }

  renderMapOnInit(){
    return <UserInfoMap/>
  }



  render() {
    console.log("the props", this.props)
    return (
      <MuiThemeProvider>
      <div>
        <header>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"/>
        </header>
        <AppBar title="the coffee app" style={styles.appbarStyle} iconElementLeft={<div className="header-logo"/>}/>
        <div className="form-body">
          <Paper className="user-input-frame"zDepth={3}>
          <div className="title-box">
            <div className="title-of-page"> U S E R - I N P U T </div>
          </div>
          <div className="user-location-info">
            <div className="location-info">
              <div className="coords-box">
                <div className="userdata-coords">
                  <div className="latlng-lable">latitude:</div>
                  <div className="coords"> {Math.round(this.coordObj.lat*1000)/1000}
                  </div>
                </div>
                <div className="userdata-coords">
                  <div className="latlng-lable">longitude:</div>
                  <div className="coords"> {Math.round(this.coordObj.lng*1000)/1000}</div>
                </div>
              </div>
              <div className="CR-box">
                <div className="location-class">Country: </div>
                <div className="location-var">{this.props.address.country}</div>
              </div>
              <div className="CR-box">
                <div className="location-class">Region: </div>
                <div className="location-var">{this.props.address.region}</div>
              </div>
            </div>
            <div className="location-map">

                 {this.renderMapOnInit()}

            </div>
          <div/>


          </div>
          <div className="user-yield-info">
            <div className="user-data-info">
                <div className="user-data-type">Y I E L D :</div>
                <div className="user-data-value-container">
                  <div className="user-data-value">{this.props.yieldValue/10}</div>
                  <div className="user-data-unit">t ha-1 y-1</div>
                </div>

            </div>
            <div className="mat-ui-slide-bar">
              <div>
                <Slider
                max={100}
                onChange={(e) => this.props.yieldUpdate(e)}
                defaultValue={30}
                  railStyle={{
                    backgroundColor: 'white',
                    height: 3,
                    border: 'solid',
                    borderWidth: 'thin',
                  }}
                  trackStyle={{
                    backgroundColor: 'black',
                    height: 3 }}
                  handleStyle={{
                    borderColor: 'white',
                    height: 13,
                    width: 13,
                    marginLeft: -6.5,
                    marginTop: -5,
                    backgroundColor: 'black',
                  }}/>
              </div>
            </div>
          </div>
          <div className="user-shading-info">
          <div className="user-data-info">
              <div className="user-data-type">S H A D I N G  (LAI):</div>
              <div className="user-data-value-container">
                <div className="user-data-value">{this.props.shadeValue/10}</div>
                <div className="user-data-unit">m-2 m-2</div>
              </div>

          </div>
          <div className="mat-ui-slide-bar">
            <div>
              <Slider
              onChange={(e) => this.props.shadeUpdate(e)}
              defaultValue={0}
              max={60}
                railStyle={{
                  backgroundColor: 'white',
                  height: 3,
                  border: 'solid',
                  borderWidth: 'thin',
                }}
                trackStyle={{
                  backgroundColor: 'black',
                  height: 3 }}
                  handleStyle={{
                  borderColor: 'white',
                  height: 13,
                  width: 13,
                  marginLeft: -6.5,
                  marginTop: -5,
                  backgroundColor: 'black',
                }}/>
            </div>
          </div>
          </div>
          <div className="user-irrigation-info">
            <div className="user-data-info">
              <Checkbox className="user-data-type-check"
              onCheck={e => this.props.irrigationUpdate()}
              label={"I R R I G A T I O N"}
              iconStyle={{fill: 'black'}}/>
          </div>
          </div>
          <div className="user-slope-info">
          <div className="user-data-info">
              <div className="user-data-type">S L O P E :</div>
              <div className="user-data-value-container">
                <div className="user-data-value">{this.props.slopeValue}</div>
                <div className="user-data-unit">deg</div>
              </div>

          </div>
          <div className="mat-ui-slide-bar">
            <div>
              <Slider
              onChange={(e) => this.props.slopeUpdate(e)}
              defaultValue={5}
              max={50}
                railStyle={{
                  backgroundColor: 'white',
                  height: 3,
                  border: 'solid',
                  borderWidth: 'thin',
                }}
                trackStyle={{
                  backgroundColor: 'black',
                  height: 3 }}
                  handleStyle={{
                  borderColor: 'white',
                  height: 13,
                  width: 13,
                  marginLeft: -6.5,
                  marginTop: -5,
                  backgroundColor: 'black',
                }}/>
            </div>
          </div>
          </div>
          <div className="additional-local-info">
          <div className="model-button">
            {this.renderModelButton()}
          </div>
          </div>
          </Paper>
        </div>
      </div>
    </MuiThemeProvider>
    );
  }
}


//
export default connect(mapStateToProps,mapDispatchTo)(UserInput);;
