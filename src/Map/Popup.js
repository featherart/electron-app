import React from 'react';

export const Popup = ({ url, imageName }) => (
  <div className='popup-container'>
   <img src={url} alt={imageName} />
  </div>
  )