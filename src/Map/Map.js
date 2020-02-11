import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -122.43,
      lat: 37.837,
      zoom: 12
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [ this.state.lng, this.state.lat ],
      zoom: this.state.zoom
    });
    const { markers } = this.props;
    // add markers to map
    markers.forEach(marker => {
      const { lon, lat, imageName } = marker;
      const { fields: { file: { url } } } = imageName;
      console.log('url', url);

      // create a DOM element for the marker
      var el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = url;
      el.style.width = '52px';
      el.style.height = '52px';

      el.addEventListener('click', () => {
        console.log('hi from marker');
      });

      // add marker to map
      new mapboxgl.Marker(el).setLngLat([ lon, lat ]).addTo(map);
    });
  }

  render() {
    return (
      <div>
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}
