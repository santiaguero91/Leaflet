import * as React from 'react';
import { MapContainer } from 'react-leaflet';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';

export const Mapa = () => { 
  return (
      <MapContainer zoom={14} center={[-34.61315, -58.37723]}>
        <ReactLeafletGoogleLayer apiKey="AIzaSyBWYlt1w2sE8DcqeMuFy7nksHUwIgtXB0s" type={'satellite'} />
      </MapContainer>
  );
};
