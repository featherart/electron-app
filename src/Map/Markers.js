import React, { PureComponent } from 'react';
import { Marker, Popup } from 'react-map-gl';

// PureComponent ensures that the markers are only rerendered when data changes
class Markers extends PureComponent {
  state = {
    showPopup: true
  };

  render() {
    const { data } = this.props;
    return data.map(marker => {
      const { lon, lat, imageName } = marker;
      const { fields: { file: { url } } } = imageName;

      return (
        <div key={lon}>
          {this.state.showPopup && (
            <Popup
              latitude={lat}
              captureClick={true}
              longitude={lon}
              closeButton={true}
              closeOnClick={false}
              onClose={() => this.setState({ showPopup: false })}
              anchor="right"
            >
              <button onClick={() => console.log('hibye')} />
            </Popup>
          )}
          <Marker longitude={lon} latitude={lat}>
            <button
              style={{ backgroundColor: 'yellow', height: '52px', width: '52px', borderRadius: '50%' }}
              onClick={e => {
                console.log('hiihihihi')
                this.setState({ showPopup: true })
              }}
            >
              <img alt="marker" height="52px" src={url} />
            </button>
          </Marker>
        </div>
      );
    });
  }
}

export default Markers;
