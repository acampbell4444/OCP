import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <h1>{text}</h1>;

export default class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 33.206458, lng: -117.3897404},
    zoom: 15
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB0CaT3ITg5cuMqTZ-TN7xFffjMlWkCM14' }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={33.206458}
          lng={ -117.3897404}
          text={'Oceanside Parasail'}
        />
      </GoogleMapReact>
    );
  }
}