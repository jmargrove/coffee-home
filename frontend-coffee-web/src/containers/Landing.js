import React, { Component } from "react";
import { Header } from "./Header.js";
import { aboutJames } from "./aboutJames";
class Landing extends Component {
  aboutUsInfo(name, about) {
    return (
      <div className="InfoContainer">
        <div className="InfoPhoto">photo</div>
        <div>
          <div>{name}</div>
          <div>{about}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="MaxWidth">
        {Header()}

        <div className="Box" style={{ flex: 0.25 }} />
        <div className="Box" id="OurWhy">
          <h1 style={{ "margin-top": "80px" }}> OUR WHY </h1>
          <h2>
            For coffee growers in a changing world we provide management
            solutions using the most up to date models science has.
          </h2>
        </div>
        <div className="Box" id="OurWhy">
          <h1>WHO WE ARE</h1>
          <div className="Box" id="">
            <div className="OurPersonalProfile">
              <div className="PictureBox">
                <img
                  src={
                    "https://s3-eu-west-1.amazonaws.com/james.margrove/the-coffee-app/profilePicture"
                  }
                  className="ProfilePicture"
                />
              </div>
              <div className="Information" />
            </div>
            <div className="OurPersonalProfile" />
          </div>
        </div>
        <div className="Box"> other pages </div>
      </div>
    );
  }
}

export default Landing;
