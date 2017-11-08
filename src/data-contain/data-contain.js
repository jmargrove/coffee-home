import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import styles from './styles.json'
import { connect } from 'react-redux';
import { nextImage } from './../action/actions.js';

const mapDispatchImage = (dispatch) => ({
  nextImg: () => dispatch(nextImage())
})

const mapStateImage = (state) => ({
  imageRef: state.rainfallMap[0],
  month: state.rainfallMap[1]
})



class DataContain extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="container">
      <Paper className="rainfall" style={styles.paperStyle} zDepth={1}>
      <div className="rainfall-graph"><img alt="rainfall-month-mean" className="imgs" src="http://localhost:8080/Rcode/rainfall-maps/monthly-data.jpg" /></div>

      <div className="rainfall-map"> {this.props.month}
        <img alt="rainfall-area" className="imgs" onClick={()=> {this.props.nextImg()}} src={this.props.imageRef}/>
      </div>
      </Paper>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default connect(mapStateImage, mapDispatchImage)(DataContain);
