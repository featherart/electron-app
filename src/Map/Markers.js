import React, { PureComponent } from 'react';
import { Marker } from 'react-map-gl';

// PureComponent ensures that the markers are only rerendered when data changes
class Markers extends PureComponent {
  render() {
    const { data } = this.props;
    return data.map(marker => {
      const { lon, lat, imageName } = marker
      const { fields: { file: { url }} } = imageName
      return (
        <Marker key={lon} longitude={lon} latitude={lat}>
          <img alt="marker" height="48px" src={url} />
        </Marker>
      );
    });
  }
}

export default Markers;
