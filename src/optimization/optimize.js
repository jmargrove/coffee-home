import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './style.json'
import queryString  from 'query-string'
import { connect } from 'react-redux'
import './optimize.css'
import { optimizedModel } from './../action/actions'
import { Line } from 'react-chartjs-2';
import Loader from './../load-page/load-page.js'
import { Link } from 'react-router-dom'
class Optimize extends Component {
  state = {
    loading: false,
  }

  postCoordsModel(coords){
    this.setState({ loading: true });
    fetch('http://localhost:8080/optimize', {
      body: JSON.stringify({
        xcoord: coords.lng,
        ycoord: coords.lat,
      }),
      headers: {'Content-Type' : 'application/json'},
      method: 'POST',
    })
    .then(resp => resp.json())
    .then(r => {
      this.props.optimized(r)
      this.setState({ loading: false });
    })
  }
  componentDidMount(){
    this.postCoordsModel(queryString.parse(this.props.location.search))
  }


  options = {
    animation: {
      duration: 3000,
    },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
      scaleLabel: {
       display: true,
       labelString: 'Yield t ha-1'
      }
    }],
    xAxes: [{
    scaleLabel: {
     display: true,
     labelString: 'Shade (LAI m-2 m-2)'
    }
  }]
  }
  }

  findMaxYield(theProps){
    return theProps.reduce((acc, el) => {
      return Math.max(acc, el.yieldIrrFALSE)
    }, 0)
  }

  findMaxShade = (theProps) => {
    const maxYield = this.findMaxYield(theProps)
    return (theProps.reduce((acc, el) => {
      if(el.yieldIrrFALSE >= maxYield) {
        return el.shade
      } else {
      return acc }
    }, 0))
  }


  decissionOnShade(theProps){
    const yourYield = theProps.userDataInput.yieldValue/10;
    const yourShade = theProps.userDataInput.shadeValue/10;
    const maxShade = this.findMaxShade(theProps.optimizedData);
    const maxYield = this.findMaxYield(theProps.optimizedData);
    if (yourYield < maxYield) {
      if(yourShade < maxShade) {
        return {perYieldDiff: maxYield/yourYield*100, decission: "increase", to: maxShade}
      }
      else {
        return {perYieldDiff: maxYield/yourYield*100, decission: "decrease", to: maxShade}
      }
    }
    else{
      return "great"
    }
  }

  render() {
    console.log("The optimization", this.decissionOnShade(this.props))
    if(!this.state.loading){
    return (
        <MuiThemeProvider>
        <div>
          <header>
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"/>
          </header>
          <AppBar title="the coffee app" style={styles.appbarStyle} iconElementLeft={<div className="header-logo"/>}/>
          <div className="modelData-body">
            <Paper className="optimized-data-frame" zDepth={1}>
              <div className="optimized-shade-title"> O P T I M I Z E D - S H A D E</div>
              <Paper className="Not-irrigated-graph-container" zDepth={1}>
              <Line
              width={1}
              data={{
                labels: [0, 0.5, 1, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0],
                datasets: [{
                    label: "blue",
                    data: [
                      this.props.optimizedData[0].yieldIrrFALSE,
                      this.props.optimizedData[1].yieldIrrFALSE,
                      this.props.optimizedData[2].yieldIrrFALSE,
                      this.props.optimizedData[3].yieldIrrFALSE,
                      this.props.optimizedData[4].yieldIrrFALSE,
                      this.props.optimizedData[5].yieldIrrFALSE,
                      this.props.optimizedData[6].yieldIrrFALSE,
                      this.props.optimizedData[7].yieldIrrFALSE,
                      this.props.optimizedData[8].yieldIrrFALSE,
                      this.props.optimizedData[9].yieldIrrFALSE,
                      this.props.optimizedData[10].yieldIrrFALSE,
                      this.props.optimizedData[11].yieldIrrFALSE,
                      this.props.optimizedData[12].yieldIrrFALSE,
                      this.props.optimizedData[13].yieldIrrFALSE,
                      this.props.optimizedData[14].yieldIrrFALSE,
                      this.props.optimizedData[15].yieldIrrFALSE,
                      this.props.optimizedData[16].yieldIrrFALSE,
                      this.props.optimizedData[17].yieldIrrFALSE,
                    ],
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                }]
              }}
              options={this.options}
              />
              </Paper>
              <Paper className="extra-info-pannel" zDepth={0}>
                <div className="extra-info-shade">
                The predicted maximum yield at&nbsp;
                <b>{this.props.address.region}</b> in&nbsp;
                <b>{this.props.address.country}</b>&nbsp;
                (lat: <b>{Math.round(this.props.coords.lat*100)/100} </b>,&nbsp;
                lng: <b>{Math.round(this.props.coords.lng*100)/100}</b>) is&nbsp;
                <b>{this.findMaxYield(this.props.optimizedData)}</b> t ha-1.&nbsp;
                Our model suggets that you &nbsp;
                <b> {this.decissionOnShade(this.props).decission}</b>&nbsp;
                your shade cover by <b>{Math.round(this.decissionOnShade(this.props).perYieldDiff*100)/100} %</b>&nbsp;
                to <b>{this.decissionOnShade(this.props).to}</b> LIA.
              </div>
                <div className="button-home">
                  <Link to="/home">
                    <RaisedButton label="Back to map"/>
                  </Link>
                </div>
              </Paper>
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
    else {
      return <Loader/>
    }
  }
}

const mapStateToProps = (state) => ({
  coords: state.coords,
  userInput: state.userDataInput,
  optimizedData: state.optimizedData,
  address: state.address,
  userDataInput: state.userDataInput
})

const mapDispatchTo = (dispatch) => ({
  optimized: (data) => dispatch(optimizedModel(data))
})
//
export default connect(mapStateToProps, mapDispatchTo)(Optimize);;
