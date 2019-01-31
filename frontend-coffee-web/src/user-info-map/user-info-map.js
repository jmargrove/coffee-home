import React, { Component } from 'react';
import { connect } from 'react-redux'
import './user-info-map.css';
import apiSTYLE from './stylesheet.json'
import './user-info-map.css'

var GoogleMapsLoader = require('google-maps');

const mapStateToProps = (state) => ({
  coords: state.coords
})


class UserInfoMap extends Component {
  gooLoad(x, y){
    /// google maps loader
    GoogleMapsLoader.KEY = 'AIzaSyD-lTpPY74D4voFl81v3HZ_JeN45sQZ_T4';
    GoogleMapsLoader.load(function(google){
      var myLatlng = {lat: x, lng: y}
      var map = new google.maps.Map(document.getElementById('mapSmall'), {
        zoom: 3,
        center: myLatlng,
        mapTypeId: 'terrain',
        styles: apiSTYLE,
      });
      /// working on geocoding
      var marker = new google.maps.Marker({
         position: myLatlng,
         map: map,
         title: '',
       });

    });

  }

  componentDidMount() {
    this.gooLoad(
      this.props.coords.lat,
      this.props.coords.lng
    )
  }

  render() {
    console.log("the map props", this.props)
    return (
      <div id="mapSmall" />
    );
  }
}

export default connect(mapStateToProps, null)(UserInfoMap);
