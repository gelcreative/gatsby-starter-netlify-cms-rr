import React, { Component } from 'react'
import { Map as LeafletMap, Marker, TileLayer, Popup } from 'react-leaflet'

class RetireRiteMap extends Component {

  render() {
    const position = [44.390092, -79.704469]
    const accessToken = 'pk.eyJ1IjoiZ2VsYWdlbmN5IiwiYSI6ImNqc2YyMHdvNjAyeXM0NHFwanl5cDdwbzQifQ.DBHeFeHLQ9cMeJXBs1-R1w'

    if(typeof window !== 'undefined') {
      return (
        <LeafletMap
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
          />
            <Marker
              position={position}
            >
              <Popup>
                Suite 307 - 126 Wellington Street West <br />
                Barrie, ON  <br />
                L4N 1K9 
              </Popup>
            </Marker>
        </LeafletMap>
      )
    }
    return null
  }
}

export default RetireRiteMap