import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';
//import Markers from './Markers';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -122.43,
      lat: 37.837,
      zoom: 12
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [ this.state.lng, this.state.lat ],
      zoom: this.state.zoom
    });
  }
  render() {
    return (
      <div>
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

/*
<ReactMapGL
  {...viewport}
  onClick={() => console.log('hihihihi')}
  doubleClickZoom={false}
  style={geolocateStyle}
  mapStyle={'mapbox://styles/mapbox/satellite-v9'}
  mapboxApiAccessToken={TOKEN}
  width={'100vw'}
  height={'100vh'}
  latitude={37.837}
  longitude={-122.43}
  zoom={12}
>
</ReactMapGL>
*/
