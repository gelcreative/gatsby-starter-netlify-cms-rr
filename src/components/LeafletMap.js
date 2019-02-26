import React, { Component } from 'react'
import Leaflet from 'leaflet'

class LeafletMap extends Component {
  initLeafletMap = () => {
    var retireriteMap = Leaflet.map('retirerite-map').setView([44.390092, -79.704469], 16);

    Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiZ2VsYWdlbmN5IiwiYSI6ImNqc2YyMHdvNjAyeXM0NHFwanl5cDdwbzQifQ.DBHeFeHLQ9cMeJXBs1-R1w'
    }).addTo(retireriteMap);
  }

  componentDidMount() {
    this.initLeafletMap()
  }

  render() {
    return <div id="retirerite-map" style={{ height: '300px' }}></div>
  }
}

export default LeafletMap