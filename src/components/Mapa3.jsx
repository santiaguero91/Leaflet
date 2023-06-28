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
import { deleteMarker, getMarkers } from "../redux/actions";
import { statesData } from "../data";
import {MapDiv, MapcontainerDiv, PopupPlate, TituloMarker } from "./MapStyle";
import leafIcon from "../components/leaf.png"
import LeafletFileLayer from "../components/FileLayer/FileLayer"

function Mapa2() {
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();
  const allMarkers = useSelector((state) => state.markers);

  const markerIcon = new L.icon({
    iconUrl: leafIcon,
    iconSize: [20, 20],
    popupAnchor: [3, -46], 
  });
  
  const center=[-34.61315, -58.37723];
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  function cambiar() {
    count === 1 ? setCount(count + 1) : setCount(count - 1);
    console.log(count);
  }

  function close(id) {
    dispatch(deleteMarker(id));
    location.reload();
  }




  useEffect(() => {
    dispatch(getMarkers());
  }, [dispatch]);

  return (
    <MapDiv>
      <button onClick={() => cambiar()}>CAMBIAR MAPA</button>

 <MapcontainerDiv>

    
 </MapcontainerDiv>
    </MapDiv>
  );
}

export default Mapa2;
