import React, { useEffect, useState } from "react";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  LayersControl,
  Circle,
  Rectangle,
  FeatureGroup,
  Polygon,
} from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { getMarkers } from "../redux/actions";
import { statesData } from "../data";

function Mapa2() {
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();
  const allMarkers = useSelector((state) => state.markers);

  const center = [51.505, -0.09];
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  function cambiar() {
    count === 1 ? setCount(count + 1) : setCount(count - 1);
    console.log(count);
  }

  function ver() {
    console.log(allMarkers);
  }
  useEffect(() => {
    dispatch(getMarkers());
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => cambiar()}>CAMBIAR</button>
      <button onClick={() => ver()}>VER</button>
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
          <MarkerClusterGroup>
            {allMarkers.map((el) => { 
              if(el.id <20)
              {return (
                <Marker
                  position={{
                    lat: el.latitude,
                    lng: el.longitude,
                  }}
                  key={el.id}
                >
                  <Popup key={el.id}>
                    {el.name}

                    {el.link && <a href={el.link}>{el.name}</a>}
                  </Popup>
                </Marker>
              )};
            })}

            <Circle
              center={[51.51, -0.08]}
              pathOptions={{ color: "green", fillColor: "green" }}
              radius={100}
            />
          </MarkerClusterGroup>

          <LayersControl.Overlay checked name="Estados">
            <LayerGroup>
              {statesData.features.map((state) => {
                const coordinates = state.geometry.coordinates[0].map(
                  (item) => [item[1], item[0]]
                );

                return (
                  <Polygon
                  key={coordinates}
                    pathOptions={{
                      fillColor: "#b1b0b0",
                      fillOpacity: 0.7,
                      weight: 2,
                      opacity: 1,
                      dashArray: 3,
                      color: "white",
                    }}
                    positions={coordinates}
                    eventHandlers={{
                      mouseover: (e) => {
                        const layer = e.target;
                        layer.setStyle({
                          dashArray: "",
                          fillColor: "#464646",
                          fillOpacity: 0.7,
                          weight: 2,
                          opacity: 1,
                          color: "white",
                        });
                      },
                      mouseout: (e) => {
                        const layer = e.target;
                        layer.setStyle({
                          fillOpacity: 0.7,
                          weight: 2,
                          dashArray: "3",
                          color: "white",
                          fillColor: "#797979",
                        });
                      },
                      click: (e) => {},
                    }}
                  />
                );
              })}

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
              <LayerGroup></LayerGroup>
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
