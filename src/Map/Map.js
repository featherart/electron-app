import React, { useState } from 'react';
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';

export const MapView = ({ markers }) => {
  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN
  });
  const [ showPopup, togglePopup ] = useState(false);

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
          <Marker
            key={lat}
            coordinates={[ lon, lat ]}
            anchor="bottom"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              //togglePopup(!showPopup)
            }}
            >
              {
                showPopup &&
                <Popup
                  coordinates={[ lon, lat ]}
                  offset={{'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]}}
                />
              }
            <img alt={imageName} height="40" width="40" src={url} />
          </Marker>
        );
      })}
    </Map>
  );
};
