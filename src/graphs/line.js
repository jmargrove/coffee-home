import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import { connect } from 'react-redux';

const mapStateData = (state) => ({
  data: state.data,
})

class LineChart extends Component {
 options = {
  // circumference: 10,
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

  render() {
    return (
      <div className="chart">
        <Doughnut
          data={{
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
                borderWidth: 1,
              }
            ]
          }}
          options={this.options}
        />
      </div>
    );
  }
}



export default connect(mapStateData, null)(LineChart);
