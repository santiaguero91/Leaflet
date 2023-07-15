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
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import { useNavigate } from "react-router-dom";
import AddMarkerOnRightClick from "./AddMarkerOnRightClick/AddMarkerOnRightClick";
import Footer from "./Footer/Footer";
import { LateralListDiv } from "../Views/HomeAdmin/HomeStyle";
import LateralItems from "./LateralItemsView/LateralItems";

function Mapa2() {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allMarkers = useSelector((state) => state.markers);
  const mapstate = useSelector((state) => state.map);
  const openLateralList = useSelector((state) => state.openLateralList);


  const defaultMarkerIcon = new L.icon({
    iconUrl: 'https://firebasestorage.googleapis.com/v0/b/leafletgerminar.appspot.com/o/66334dee-c7ad-49e2-90c6-59f622fb481c?alt=media&token=8b567678-5fb3-4bcd-9a1b-c21994a352bb',
    iconSize: [40, 40],
    popupAnchor: [3, -46], 
  });

  const markerIcon = new L.icon({
    iconUrl: leafIcon,
    iconSize: [20, 20],
    popupAnchor: [3, -46], 
  });
  
  const center=[-34.61315, -58.37723];

  function close(id) {
     dispatch(deleteMarker(id)); 
  }

  function openModifyPanel(id) {
    dispatch(setOpenModifyPanel(id));
  }

  function verMasInfo(id) {
    console.log();
    navigate(`/details/${id}`);
  }

  function ver() {
    console.log(allMarkers);
  }
  useEffect(() => {
    dispatch(getMarkers());
  }, [dispatch]);

  return (
    <MapDiv>
{/* <button onClick={()=>ver()}>VER</button> */}
<MapcontainerDiv>
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={true}
        style={{ width: "90vw", height: "90vh" }}
      >
        {mapstate === 1 ? ( 
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          ></TileLayer>
        ) : (
          <ReactLeafletGoogleLayer type={'hybrid'} />
        )}  
        <LayersControl position="topright">
          <MarkerClusterGroup>
            {allMarkers.map((el) => {
                return (
                  <Marker
                    position={{
                      lat: el.latitude,
                      lng: el.longitude,
                    }} 
                    key={el.updatedAt}
                      icon={el.tipo === "hoja" ? markerIcon : defaultMarkerIcon}                        >
                    <Popup key={el.id}>
                      <PopupPlateDiv>
                        <TituloMarker><div className="popupTitle">{el.name}</div></TituloMarker>
                        {el.link && <a href={el.link}>{el.name}</a>}
                        {el.img && <img width="250px" src={el.img} />}
                        <div className="botones">
                        <button onClick={() => close(el._id)}> Borrar </button>
                        <button onClick={() => verMasInfo(el.id)}> Mas Info </button>
                        <button onClick={() => openModifyPanel(el)}> Modificar </button>
                        </div>
                      </PopupPlateDiv>
                    </Popup>
                  </Marker>
                );
              
            })}
          </MarkerClusterGroup>
              <LeafletFileLayer/>

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
      <AddMarkerOnRightClick/>
      {openLateralList === 1 && <LateralListDiv
    ><LateralItems/></LateralListDiv>  }
            </LayerGroup>
          </LayersControl.Overlay>

        </LayersControl>
      </MapContainer>
      </MapcontainerDiv>
      {/* <Footer/> */}
    </MapDiv>
  );
}

export default Mapa2;
