import React from "react";
import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import leafIcon from "../components/leaf.png"
import L from "leaflet"
import { statesData } from "../data";





function Mapa() {
  const center = [-28.15, -63.52];

const interactionOptions = {
  zoomControl: true,
  doubleClickZoom: false,
  closePopupOnClick: true,
  dragging: true,
  zoomSnap: true,
  zoomDelta: false,
  trackResize: false, 
  touchZoom: false,
  scrollWheelZoom: true
}


  const markerIcon = new L.icon({
    iconUrl: leafIcon,
    iconSize: [20, 20],
    popupAnchor: [3, -46], 
  });


  return (
    <MapContainer
      center={center}
      zoom={8}
      minZoom={4}
      maxZoom={16}
      style={{ width: "70vw", height: "70vh" }}
      {...interactionOptions}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/topo-v2/{z}/{x}/{y}.png?key=CdQyAANewyZZe8a2YwTo"
         attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
       
 ></TileLayer>

      <Marker
        position={{
          lat: -28.15, lng:-63.52}}
          icon={markerIcon}
          
        >
<Popup>

<b>Proyecto: numero 1</b>
<a href="https://www.google.com/?hl=es">Website</a>

</Popup>

</Marker>

    </MapContainer>
  );
}

export default Mapa;
