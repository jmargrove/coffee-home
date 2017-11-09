import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import './rainfall.css';
import styles from './style.json'
import { connect } from 'react-redux';
import { nextImage } from './../action/actions.js';
import DataContain from './../data-contain/data-contain.js'
import CircularProgress from 'material-ui/CircularProgress';
import BarChart from './../graphs/line.js'
import Pies from './../graphs/vxPie.js'
import Axis from './../graphs/axis.js'
import queryString  from 'query-string'
import { postReq } from './../action/actions.js';
import Paper from 'material-ui/Paper'
import { withScreenSize } from '@vx/responsive';
import  PieChart  from './../graphs/line.js'
import { Doughnut } from 'react-chartjs-2';

const mapDispatchTo = (dispatch) => ({
  postreq: (dt) => dispatch(postReq(dt))
})

const mapStateData = (state) => ({
  data: state.data,
})

class Rainfall extends Component {
  options = {
  responsive: true,
   title: {
     display: true,
     text: "    ",
   },
   legend: {
     display: true,
     position:'right'
   },
   animation: {
     duration: 3000,
   }
 }

  postCoords(coords){
    fetch('http://localhost:8080/Rcode', {
      body: JSON.stringify({xcoord: coords.lng, ycoord: coords.lat}),
      headers: {'Content-Type' : 'application/json'},
      method: 'POST',
    })
    .then(resp => resp.json())
    .then(r => this.props.postreq(r))
  }
  componentDidMount(){
    this.postCoords(queryString.parse(this.props.location.search))
  }

  render() {
    console.log("updated props:", this.props.data)
    const screenSize = {
      width: 420,
      height: 200
    }

    return (
      <MuiThemeProvider>
      <div>
        <header>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"/>
        </header>
        <AppBar title="the coffee app" style={styles.appbarStyle} iconElementLeft={<div className="header-logo"/>}/>
          <div className="stat-body">
            <Paper className="data-dashboard1" zDepth={1}>
              <div className="soil-title">Soil</div>
              <div className="general-data">
                <div className="soil-type-box">

                  <div className="soil-type">{this.props.data.dom_soil_type} </div>
                </div>
              </div>
              <div className="soil-sep"> t o p - s o i l - t e x t u r e </div>
              <div className="top-data">
                <div className="top-soil-pie">
                  <div className="pie-box">
                  <Doughnut options={this.options} data={{
                      labels: ["gravel", "sand", "silt", "clay"],
                      datasets: [
                        {
                          label: false,
                          data: [
                            this.props.data.top_soil_fraction[0].percentage, // gravel
                            this.props.data.top_soil_fraction[1].percentage, // sand
                            this.props.data.top_soil_fraction[2].percentage, // silt
                            this.props.data.top_soil_fraction[3].percentage], // clay
                          backgroundColor: ['#AB9B96', '#808080', '#A63A50', '#000000'],
                          // borderColor: "black",
                          borderWidth: 4,
                        }
                      ]
                    }}/>
                  </div>
                </div>
                <div className="top-soil-info">
                  <div className="top-soil-pH">pH: {this.props.data.TpH}</div>
                  <div className="top-soil-Carbon">OC: {this.props.data.TOC}</div>
                  <div className="top-soil-BD">Bulk density: {this.props.data.top_bulk_density}</div>
                </div>
              </div>

              <div className="soil-sep-sub"> s u b - s o i l - t e x t u r e </div>

              <div className="sub-data">
                <div className="sub-soil-info">
                  <div className="sub-soil-pH">pH: {this.props.data.SpH}</div>
                  <div className="sub-soil-Carbon">OC: {this.props.data.SOC}</div>
                  <div className="sub-soil-BD">Bulk density: {this.props.data.sub_bulk_density}</div>
                </div>
                <div className="sub-soil-pie">
                  <Doughnut options={this.options} data={{
                    labels: ["gravel", "sand", "silt", "clay"],
                    datasets: [
                      {
                        label: false,
                        data: [
                          this.props.data.sub_soil_fraction[0].percentage, // gravel
                          this.props.data.sub_soil_fraction[1].percentage, // sand
                          this.props.data.sub_soil_fraction[2].percentage, // silt
                          this.props.data.sub_soil_fraction[3].percentage], // clay
                        backgroundColor: ['#AB9B96', '#808080', '#A63A50', '#000000'],
                        // borderColor: "black",
                        borderWidth: 4,
                      }
                    ]
                  }}/>
                </div>

              </div>
            </Paper>

            <Paper className="data-dashboard2" zDepth={1}>
              <div className="soil-title">Rainfall</div>


              <Axis yMax={(this.props.data.dt.reduce((acc, el) => {
                if(el.rain > acc) return el.rain
                return acc
              }, 0))*1.161} data={this.props.data.dt} width={1*screenSize.width} height={.8*screenSize.width} />


              <Axis yMax={(this.props.data.dt.reduce((acc, el) => {
                if(el.rain > acc) return el.rain
                return acc
              }, 0))*1.161} data={this.props.data.dt} width={1*screenSize.width} height={.8*screenSize.width} />

            </Paper>
          </div>
      </div>
    </MuiThemeProvider>
    );
  }
}


//
export default connect(mapStateData, mapDispatchTo)(Rainfall);;
