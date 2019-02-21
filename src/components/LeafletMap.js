import React, { Component } from 'react'

class LeafletMap extends Component {
  initLeafletMap = () => {
    var retireriteMap = L.map('retirerite-map').setView([51.505, -0.09], 13);
  }

  componentDidMount() {
    this.initLeafletMap()
  }

  render() {
    return <div id="retirerite-map" style={{ height: '180px' }}></div>
  }
}

export default LeafletMap