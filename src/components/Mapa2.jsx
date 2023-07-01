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
  Polygon,
} from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { deleteMarker, getMarkers, setOpenModifyPanel } from "../redux/actions";
import { statesData } from "../data";
import {MapDiv, MapcontainerDiv, PopupPlateDiv, TituloMarker } from "./MapStyle";
import leafIcon from "../components/leaf.png"
import LeafletFileLayer from "../components/FileLayer/FileLayer"
import CoordOnClick from "./AddMarkerOnRightClick/AddMarkerOnRightClick";
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import { useNavigate } from "react-router-dom";


function Mapa2() {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allMarkers = useSelector((state) => state.markers);

  const markerIcon = new L.icon({
    iconUrl: leafIcon,
    iconSize: [20, 20],
    popupAnchor: [3, -46], 
  });
  
  const center=[-34.61315, -58.37723];

  function cambiar() {
    count === 1 ? setCount(count + 1) : setCount(count - 1);
    console.log(count);
  }

  function close(id) {
    dispatch(deleteMarker(id));
    location.reload();
  }

  function openModifyPanel(id) {
    dispatch(setOpenModifyPanel(id));
  }

  function verMasInfo(id) {
    console.log();
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    dispatch(getMarkers());
  }, [dispatch]);

  return (
    <MapDiv>
      <button onClick={() => cambiar()}>CAMBIAR MAPA</button>

<MapcontainerDiv>
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={true}
        style={{ width: "90vw", height: "90vh" }}
      >
        {count === 1 ? ( 
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          ></TileLayer>
        ) : (
          <ReactLeafletGoogleLayer type={'satellite'} />
        )}  
        <LayersControl position="topright">
          <MarkerClusterGroup>
            {allMarkers.map((el) => {
              if (el.id < 30) {
                return (
                  <Marker
                    position={{
                      lat: el.latitude,
                      lng: el.longitude,
                    }}
                    key={el.id}
                    icon={markerIcon}                  >
                    <Popup key={el.id}>
                      <PopupPlateDiv>
                        <TituloMarker>{el.name}</TituloMarker>
                        {el.link && <a href={el.link}>{el.name}</a>}
                        {el.img && <img width="250px" src={el.img} />}
                        <div className="botones">
                        <button onClick={() => close(el.id)}> Delete </button>
                        <button onClick={() => verMasInfo(el.id)}> Mas Info </button>
                        <button onClick={() => openModifyPanel(el)}> Modify </button>
                        </div>
                      </PopupPlateDiv>
                    </Popup>
                  </Marker>
                );
              }
            })}
          </MarkerClusterGroup>

          <LayersControl.Overlay checked name="Estados">
            <LayerGroup>
              <LeafletFileLayer/>
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
      <CoordOnClick/>

            </LayerGroup>
          </LayersControl.Overlay>

        </LayersControl>
      </MapContainer>
      </MapcontainerDiv>
    </MapDiv>
  );
}

export default Mapa2;
