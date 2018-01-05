import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import styles from "./style.json";
import queryString from "query-string";
import { connect } from "react-redux";
import { modelData } from "./../action/actions";
import "./simple-results.css";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import { yearChange } from "./../action/actions";
import Loader from "./../load-page/load-page.js";
const marks = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6"
};

const ordinalNumbers = [
  { year: 1, ordinal: "first" },
  { year: 2, ordinal: "second" },
  { year: 3, ordinal: "third" },
  { year: 4, ordinal: "forth" },
  { year: 5, ordinal: "fifth" },
  { year: 6, ordinal: "sixth" }
];

class SimpleResults extends Component {
  renderOptimizationButton() {
    const coordObj = queryString.parse(this.props.location.search);
    console.log("un parsed stuff", coordObj);
    return (
      <Link
        to={`/optimize?lat=${Number(coordObj.lat)}&lng=${Number(coordObj.lng)}`}
      >
        <RaisedButton label="Optimize Farm" />
      </Link>
    );
  }

  state = {
    loading: false
  };

  ordinalFun(number) {
    return ordinalNumbers.filter(el => {
      if (el.year === number) {
        return el.ordinal;
      }
    })[0].ordinal;
  }

  postCoordsModel(coords) {
    this.setState({ loading: true });
    fetch(
      "http://localhost:8000/simpleModel", //"http://ec2-54-229-24-11.eu-west-1.compute.amazonaws.com:80/simpleModel",
      {
        body: JSON.stringify({
          lng: coords.lng,
          lat: coords.lat,
          userShadeValue: this.props.userData.shadeValue,
          userIrrValue: Number(this.props.userData.irrigationValue),
          userSlopeValue: this.props.userData.slopeValue
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST"
      }
    )
      .then(resp => resp.json())
      .then(r => {
        this.props.modelDataDisp(r);
        this.setState({ loading: false });
      });
  }

  componentDidMount() {
    this.postCoordsModel(queryString.parse(this.props.location.search));
  }

  searchInfo = queryString.parse(this.props.location.search);
  render() {
    console.log("this props model", this.props.location.search);
    if (!this.state.loading) {
      return (
        <MuiThemeProvider>
          <div>
            <header>
              <link
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
                rel="stylesheet"
              />
            </header>
            <AppBar
              title="the coffee app"
              style={styles.appbarStyle}
              iconElementLeft={<div className="header-logo" />}
            />
            <div className="modelData-body">
              <Paper className="model-frame" zDepth={3}>
                <div className="title-box">
                  <div className="title-of-page">
                    M O D E L L E D - Y I E L D
                  </div>
                </div>
                <div className="year-selection-title"> select the year </div>
                <div className="year-selector">
                  <Slider
                    marks={marks}
                    onChange={e => this.props.yearChange(e)}
                    dots
                    step={1}
                    activeDotStyle={{ borderColor: "#A63A50" }}
                    dotStyle={{ borderColor: "#808080" }}
                    max={6}
                    min={1}
                    defaultValue={5}
                    railStyle={{
                      backgroundColor: "white",
                      height: 3,
                      border: "solid",
                      borderWidth: "thin"
                    }}
                    trackStyle={{
                      backgroundColor: "black",
                      height: 3
                    }}
                    handleStyle={{
                      borderColor: "white",
                      height: 13,
                      width: 13,
                      marginLeft: -6.5,
                      marginTop: -5,
                      backgroundColor: "black"
                    }}
                  />
                </div>

                <div className="statement">
                  Predicted coffee yield during the{" "}
                  {this.ordinalFun(this.props.yearValue)} year:
                </div>
                <div className="yield-circle-container">
                  <div id="myGlower " className="key-yield-container">
                    <div className="key-yield-unit-container">
                      <div className="key-yield-units">t ha-1</div>
                      <div className="key-yield-number">
                        {Math.round(
                          this.props.modelData[this.props.yearValue - 1].yield *
                            10
                        ) / 10}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="model-user-information">
                  <div className="user-input">
                    <div className="setting-title">
                      <div className="settings-text"> S E T T I N G S</div>
                    </div>
                    <div className="info">
                      <div className="label">User current yield: </div>
                      <div className="value">
                        {Number(this.props.userData.yieldValue / 10)}
                      </div>
                      <div className="unit">t ha-1 y-1</div>
                    </div>
                    <div className="info">
                      <div className="label">User current shade: </div>
                      <div className="value">
                        {Number(this.props.userData.shadeValue / 10)}
                      </div>
                      <div className="unit">m-2 m-2</div>
                    </div>
                    <div className="info">
                      <div className="label">User irrigating </div>
                      <div className="value">
                        {Number(this.props.userData.irrigationValue)}{" "}
                      </div>
                      <div className="unit" />
                    </div>
                    <div className="info">
                      <div className="label">User slope: </div>
                      <div className="value">
                        {Number(this.props.userData.slopeValue)}
                      </div>
                      <div className="unit">deg</div>
                    </div>
                  </div>
                  <div className="more-modelling-options">
                    {/* <Link to="/optimize">
                      <RaisedButton label="Optimize shade" />
                    </Link> */}
                    {this.renderOptimizationButton()}
                  </div>
                </div>
              </Paper>
            </div>
          </div>
        </MuiThemeProvider>
      );
    } else {
      return <Loader />;
    }
  }
}

const mapDispatchTo = dispatch => ({
  modelDataDisp: dt => dispatch(modelData(dt)),
  yearChange: year => dispatch(yearChange(year))
});

const mapStateData = state => ({
  modelData: state.modelData,
  userData: state.userDataInput,
  yearValue: state.yearValue
});

export default connect(mapStateData, mapDispatchTo)(SimpleResults);
