import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import styles from './style.json'
import queryString  from 'query-string'
import { connect } from 'react-redux'
import Loader from './../load-page/load-page.js'
import { modelData } from './../action/actions'
import Yield from './../graphs/coffee-yeild.js'
import './optimize.css'
import { optimizedModel } from './../action/actions'
import { Line } from 'react-chartjs-2';

class Optimize extends Component {
  // send request to server for optimiased data
  state = {
    loading: false,
  }

  postCoordsModel(coords){
    this.setState({ loading: true });
    console.log("post for optimization sent...", this.props)
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
      console.log("the response....:", r)
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

  render() {
    console.log("The optimization", this.props.optimizedData[0].yieldIrrFALSE)
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
              <Paper className="Not-irrigated-graph-container" zDepth={1}>
              <Line
              width={1}
              data={{
                labels: [0, 0.5, 1, 1.5, 2.0, 2.5, 3.0, 3.5, 4.5, 5.0, 5.5, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0],
                datasets: [{
                    label: "blue",
                    backgroundColor: 'blue',
                    borderColor: 'rgb(255, 99, 132)',
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
              <Paper className="extra-info-shade">
                There optimal shade is already being applied.
              </Paper>
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
    )}
    else {
      return <Loader/>
    }
  }
}

const mapStateToProps = (state) => ({
  coords: state.coords,
  userInput: state.userDataInput,
  optimizedData: state.optimizedData
})

const mapDispatchTo = (dispatch) => ({
  optimized: (data) => dispatch(optimizedModel(data))
})
//
export default connect(mapStateToProps, mapDispatchTo)(Optimize);;
