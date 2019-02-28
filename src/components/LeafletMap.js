import React, { Component } from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'

class LeafletMap extends Component {

  render() {
    const position = [44.390092, -79.704469]
    const accessToken = 'pk.eyJ1IjoiZ2VsYWdlbmN5IiwiYSI6ImNqc2YyMHdvNjAyeXM0NHFwanl5cDdwbzQifQ.DBHeFeHLQ9cMeJXBs1-R1w'
    return (
      <Map
        center={position}
        zoom={16}
        maxZoom={18}
        style={{ height: '300px' }}
      >
        <TileLayer
          id='mapbox.streets'
          accessToken={accessToken}
          url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        >
          <Marker
            position={position}
          >
          </Marker>
        </TileLayer>
      </Map>
    )
  }
}

export default LeafletMap