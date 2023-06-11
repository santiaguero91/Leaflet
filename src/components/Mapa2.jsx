import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  Popup,
  LayerGroup,
  LayersControl,
  Circle,
  Rectangle,
  FeatureGroup,
  CircleMarker,
  Tooltip,
} from "react-leaflet";
import leafIcon from "../components/leaf.png";
import L from "leaflet";
import { statesData } from "../data";
import adressPoints from "../data2";
import MarkerClusterGroup from 'react-leaflet-cluster'

function Mapa2() {
  const [count, setCount] = useState(1);

  const center = [51.505, -0.09];
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  function cambiar() {
    count === 1 ? setCount(count + 1) : setCount(count - 1);
    console.log(count);
  }

  return (
    <div>
      <button onClick={() => cambiar()}>CAMBIAR</button>
      <MapContainer
        center={center}
        zoom={7}
        scrollWheelZoom={true}
        style={{ width: "70vw", height: "70vh" }}
      >
        {count === 1 ? (
      <TileLayer
      url="https://api.maptiler.com/maps/topo-v2/{z}/{x}/{y}.png?key=CdQyAANewyZZe8a2YwTo"
       attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
     
></TileLayer>
        ) : (
            <TileLayer
            url="https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=CdQyAANewyZZe8a2YwTo"
             attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
           
     ></TileLayer>
        )}
        <LayersControl position="topright">

        <MarkerClusterGroup
        chunkedLoading
      >
          {
            adressPoints.map((el)=>{
              return (
                <LayersControl.Overlay name={el[2]}>

                <Marker position= {{
                  lat: el[0], lng:el[1]}}
                  key={el[2]}
                >
                  <Popup>{el[2]}</Popup>
                </Marker>
                </LayersControl.Overlay>
              )})}
      </MarkerClusterGroup>


{/*             <Marker 
            position={center}
            >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker> */}
          <LayersControl.Overlay checked name="Layer group with circles">
            <LayerGroup>
              <Circle
                center={center}
                pathOptions={{ fillColor: "blue" }}
                radius={200}
              />
              <Circle
                center={center}
                pathOptions={{ fillColor: "red" }}
                radius={100}
                stroke={false}
              />
              <LayerGroup>
                <Circle
                  center={[51.51, -0.08]}
                  pathOptions={{ color: "green", fillColor: "green" }}
                  radius={100}
                />
              </LayerGroup>
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Feature group">
            <FeatureGroup pathOptions={{ color: "purple" }}>
              <Popup>Popup in FeatureGroup</Popup>
              <Circle center={[51.51, -0.06]} radius={200} />
              <Rectangle bounds={rectangle} />
            </FeatureGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Mapa2;
