import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const geolocateStyle = {
  padding: '10px'
};

export const Map = () => {
  const [viewport, setViewPort ] = useState({
    width: "100%",
    height: 900,
    latitude: 0,
    longitude: 0,
    zoom: 2
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <span style={{ display: 'flex', fontSize: '15px', fontWeight: 'bolder' }}>
        Map
      </span>
      <ReactMapGL
        style={geolocateStyle}
        mapboxApiAccessToken={TOKEN}
        width={'100vw'}
        height={'100vh'}
        latitude={37.7577}
        longitude={-122.4376}
        zoom={11}
        onViewportChange={viewport => {
          const { width, height, latitude, longitude, zoom } = viewport;
          // Optionally call `setState` and use the state to update the map.
        }}
      />
    </div>
  );
};
