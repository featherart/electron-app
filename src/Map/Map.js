import React from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';

export const MapView = ({ markers }) => {
  const Map = ReactMapboxGl({
    accessToken:
    process.env.REACT_APP_MAPBOX_TOKEN
  });  
  
  const markeras = [
    {
      title: "atejl",
      lat: -122.43,
      lon: 37.837,
      coordinates: [-122.43,37.837],
      description: "ajshdfhajfs",
      // imageName,
      // fileName,
      // imageTitle,
      // imageDescription,
      // url
    }
  ]
  return (
    <Map
      style='mapbox://styles/mapbox/satellite-v9'
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
      center={[ -122.43, 37.837 ]}
      zoom={[12]}
      markers={markeras}
  >
    {markeras.map( (marker) =>
      <Marker
      key={marker.lat}
      coordinates={marker.coordinates}
      anchor="bottom"
      onClick={() => console.log("LJAKSDAS")}
      >
        <img height="40" width="40" src="https://www.pinclipart.com/picdir/big/359-3598915_map-marker-icon-location-icon-png-clipart.png" />
      </Marker>
    )}
  </Map>
    );
};
