import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

export default withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: props.lat, lng: props.lon }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: props.lat, lng: props.lon }} />
      )}
    </GoogleMap>
  )),
);
