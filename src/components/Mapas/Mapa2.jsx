import React, { useEffect } from "react";
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
import {
  deleteMarker,
  getMarkers,
  setOpenModifyPanel,
} from "../../redux/actions";
import { statesData } from "../../data";
import {
  MapDiv,
  MapcontainerDiv,
  PopupPlateDiv,
  TituloMarker,
} from "./MapStyle";
import leafIcon from "./leaf.png";
import GerminarIcon from "../../assets/germinarIcon.png";
import PawIcon from "../../assets/germinarIcon.png";
import TreeIcon from "../../assets/germinarIcon.png";
import SchoolIcon from "../../assets/germinarIcon.png";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import { useNavigate } from "react-router-dom";
import { LateralListDiv } from "../../Views/HomeAdmin/HomeStyle";
import LateralItems from "../LateralItemsView/LateralItems";
function Mapa2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allMarkers = useSelector((state) => state.markers);
  const mapstate = useSelector((state) => state.map);
  const openLateralList = useSelector((state) => state.openLateralList);

  const defaultMarkerIcon = new L.icon({
    iconUrl: GerminarIcon,
    iconSize: [50, 50],
    popupAnchor: [3, -46],
  });

  const pawMarkerIcon = new L.icon({
    iconUrl: PawIcon,
    iconSize: [50, 50],
    popupAnchor: [3, -46],
  });
  const TreeMarkerIcon = new L.icon({
    iconUrl: TreeIcon,
    iconSize: [50, 50],
    popupAnchor: [3, -46],
  });    

  const SchoolIcon = new L.icon({
    iconUrl: GerminarIcon,
    iconSize: [50, 50],
    popupAnchor: [3, -46],
  });


     const ver =()=>{
      console.log("");
     }
  const markerIcon = new L.icon({
    iconUrl: leafIcon,
    iconSize: [20, 20],
    popupAnchor: [3, -46],
  });

  const center = [-34.61315, -58.37723];

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

  useEffect(() => {
    dispatch(getMarkers());
  }, [dispatch]);

  return (
    <MapDiv>
      <MapcontainerDiv>
        <MapContainer
        className="map-container"
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
            <ReactLeafletGoogleLayer type={"satellite"} />
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
                    icon={el.tipo === "hoja" ? markerIcon : defaultMarkerIcon}
                  >
                    <Popup key={el.id}>
                      <PopupPlateDiv>
                        <TituloMarker>
                          <div className="popupTitle">{el.name}</div>
                        </TituloMarker>
                        {el.link && <a href={el.link}>{el.name}</a>}
                        {el.img && <img width="250px" src={el.img} />}
                        <div className="botones">
                        </div>
                      </PopupPlateDiv>
                    </Popup>
                  </Marker>
                );
              })}
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
                {openLateralList === 1 && (
                  <LateralListDiv>
                    <LateralItems />
                  </LateralListDiv>
                )}
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
