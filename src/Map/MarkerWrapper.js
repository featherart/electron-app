import React, { useState } from 'react';
import { Marker } from 'react-mapbox-gl';
import { Popup } from './Popup';

import './map.css';

export const MarkerWrapper = ({
  lat,
  lon,
  imageName,
  url
}) => {
  const [ showPopup, togglePopup ] = useState(false); 
  return (
    <Marker
      key={imageName}
      coordinates={[ lon, lat ]}
      anchor="bottom"
      onClick={() => {
        togglePopup(!showPopup)
      }}
    >
      {showPopup && (
        <Popup url={url} imageName={imageName} />
      )}
      <img
        alt={imageName}
        height="40"
        width="40"
        src={url}
      />
    </Marker>
  );
};
