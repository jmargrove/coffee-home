import React, { Component } from "react";
import { connect } from "react-redux";
import "./map-load.css";
import { upCoords } from "./../action/actions.js";
import apiSTYLE from "./stylesheet.json";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { upAddress } from "./../action/actions";
var GoogleMapsLoader = require("google-maps");

const mapImagesTo = state => ({
  coords: state.coords
});

const mapDispatchToCoords = dispatch => ({
  updateCoords: coords => dispatch(upCoords(coords)),
  updateLocation: address => dispatch(upAddress(address))
});

class MapLoad extends Component {
  gooLoad(x, y, fun, z, CountyRegionFinder) {
    /// google maps loader

    GoogleMapsLoader.KEY = "AIzaSyD-lTpPY74D4voFl81v3HZ_JeN45sQZ_T4";

    GoogleMapsLoader.LIBRARIES = ["places"];

    GoogleMapsLoader.load(function(google) {
      var myLatlng = { lat: x, lng: y };

      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: z,
        center: myLatlng,
        mapTypeId: "terrain",
        styles: apiSTYLE
      });
      /// working on geocoding

      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click to zoom",
        markers: []
      });

      // google.maps.event.addListener(map, "click", function (e) {
      //
      // });

      //////////////////////////////////////////////////////////////////////////
      /// GEO CODER getting the nearest address.
      var geocoder = new google.maps.Geocoder();
      var infowindow = new google.maps.InfoWindow();

      google.maps.event.addListener(map, "click", function(e) {
        let latlng = { lat: e.latLng.lat(), lng: e.latLng.lng() };
        geocodeLatLng(geocoder, map, infowindow, latlng);
        fun({ lat: e.latLng.lat(), lng: e.latLng.lng(), zoom: map.zoom });
      });

      function geocodeLatLng(geocoder, map, infowindow, latlng) {
        geocoder.geocode({ location: latlng }, function(results, status) {
          let formatted_address = results[0].formatted_address.split(",");
          const country = formatted_address[formatted_address.length - 1];
          const region = formatted_address[formatted_address.length - 2];
          CountyRegionFinder({ country: country, region: region });
        });
      }
      /////
      /////
      ////////////////////////////////////////////////////////////////////////
      /// creating a search box
      // Create the search box and link it to the UI element.
      const input = document.getElementById("pac-input");
      const searchBox = new google.maps.places.SearchBox(input);

      map.addListener("bounds_changed", function() {
        searchBox.setBounds(map.getBounds());
      });

      searchBox.addListener("places_changed", function() {
        var places = searchBox.getPlaces();
        if (places.length === 0) {
          return;
        }
        // Clear out the old markers.
        marker.markers.forEach(function(marker) {
          marker.setMap(null);
        });
        marker.markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
          if (!place.geometry) {
            return;
          }
          var icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };

          // Create a marker for each place.
          marker.markers.push(
            new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            })
          );

          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
      });
    });
  }
  state = {
    flag: false
  };

  componentDidMount() {
    this.gooLoad(
      this.props.coords.lat,
      this.props.coords.lng,
      this.props.updateCoords,
      this.props.coords.zoom,
      this.props.updateLocation
    );
    this.setState({ flag: true });
  }

  afterMountingMap(theProps) {
    console.log(theProps);
    if (this.state.flag) {
      this.gooLoad(
        theProps.coords.lat,
        theProps.coords.lng,
        theProps.updateCoords,
        theProps.coords.zoom,
        theProps.updateLocation
      );
    }
  }

  render() {
    return (
      <div className="map-container-div">
        <MuiThemeProvider>
          <div>
            <input
              id="pac-input"
              className="controls"
              type="text"
              placeholder="Search location..."
            />
            <div id="map" />
            {this.afterMountingMap(this.props)}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default connect(mapImagesTo, mapDispatchToCoords)(MapLoad);
