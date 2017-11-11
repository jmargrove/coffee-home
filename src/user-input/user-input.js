import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import './user-input.css';
import styles from './style.json'
import queryString  from 'query-string'
import Slider from 'rc-slider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import 'rc-slider/assets/index.css';
import { shadePercentage } from './../action/actions.js'
import { yieldPerHa } from './../action/actions.js'
import { irrigationCheckBox } from './../action/actions.js'
import { slopePercentage } from './../action/actions.js'
import { connect } from 'react-redux'
import Checkbox from 'material-ui/Checkbox';
import MapLoad from './../map-load/map-load.js'

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
  slopeValue: state.userDataInput.slopeValue
})


class UserInput extends Component {

  renderModelButton () {
    if(true) {
      const coordObj = (queryString.parse(this.props.location.search))
      return <RaisedButton
        label="Model"
        href={`/model?lat=${Math.round(Number(coordObj.lat)*100)/100}
        &lng=${Math.round(Number(coordObj.lng)*100)/100}
        &yield=${Math.round(Number(this.props.yieldValue))}
        &shade=${Number(this.props.shadeValue)}
        &irr=${Number(this.props.irrigationValue)}
        &slope=${Number(this.props.slopeValue)}
        `}
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
          <div className="user-location-info">
            <div />


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
              <div className="user-data-type">S H A D I N G :</div>
              <div className="user-data-value-container">
                <div className="user-data-value">{this.props.shadeValue}</div>
                <div className="user-data-unit">%</div>
              </div>

          </div>
          <div className="mat-ui-slide-bar">
            <div>
              <Slider
              onChange={(e) => this.props.shadeUpdate(e)}
              defaultValue={30}
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
          <div className="advanced-user-input">A D V A N C E D   &nbsp;  U S E R   &nbsp;  I N P U T S</div>
          <div className="statement-to-user">To increase the accuracy of your yield estimate, add in your own environmental data.</div>
            <div>
            <label className="user-data">Rainfall:</label>
              <input className="data" name="myFile" type="file"/>
              </div>
            <div>
            <label className="user-data">Max-temperature:</label>
              <input className="data" name="myFile" type="file"/>
              </div>
            <div>
            <label className="user-data">Min-temperature:</label>
              <input className="data" name="myFile" type="file"/>
            </div>
          <div className="form"/>
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
