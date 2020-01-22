import React from 'react';
import { LocationFetcher } from './LocationFetcher';
import { Map } from './Map';

function App() {
  return (
    <div className="content">
      <LocationFetcher />
      <Map />
    </div>
  );
}

export default App;
