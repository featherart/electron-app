import React from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Markers from './Markers';

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const geolocateStyle = {
  padding: '10px'
};

export const Map = props => {
  const { markers } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <span style={{ display: 'flex', fontSize: '15px', fontWeight: 'bolder' }}>
        Map
      </span>
      <ReactMapGL
        style={geolocateStyle}
        mapStyle={'mapbox://styles/mapbox/satellite-v9'}
        mapboxApiAccessToken={TOKEN}
        width={'100vw'}
        height={'100vh'}
        latitude={37.8370}
        longitude={-122.4300}
        zoom={12}
      >
        <Markers data={markers} />
      </ReactMapGL>
    </div>
  );
};
