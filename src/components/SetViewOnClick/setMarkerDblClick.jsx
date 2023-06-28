import { Marker, useMapEvents } from 'react-leaflet';

export default function AddMarkerOnRightClick() {
    const map = useMapEvents({
  contextmenu(event) {
        const latlng = event.latlng;
        console.log(latlng);
        new L.marker(latlng).addTo(map);;
      },
    });
  }