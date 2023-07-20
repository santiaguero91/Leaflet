import { useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";



function MyLocationMarker(map) {
const [position, setPosition] = useState(null)
useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })
  return (
    <Marker
      key={key}
      position={[lat, lng]}
  />)
}

export default MyLocationMarker;