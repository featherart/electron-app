import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import { MarkerWrapper } from './MarkerWrapper';

import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';

export const MapView = ({ markers }) => {
  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN
  });

  return (
    <Map
      style={'mapbox://styles/mapbox/satellite-v9'}
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
      center={[ -122.43, 37.837 ]}
      zoom={[ 12 ]}
      markers={markers}
    >
      {markers.map(marker => {
        const { lon, lat, url, imageName } = marker;
        return (
          <MarkerWrapper
            key={lat}
            lat={lat}
            lon={lon}
            url={url}
            imageName={imageName}
          />
        );
      })}
    </Map>
  );
};
