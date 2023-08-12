import React, { useEffect, useState } from "react";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import Modal from "react-modal";

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
  getInfoById,
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
import SchoolIcon from "../../assets/Schoolcon.png";
import PawIcon from "../../assets/PawIcon.png";
import TreeIcon from "../../assets/TreeIcon.png";
import GerminarIcon from "../../assets/germinarIcon.png";
import LeafletFileLayer from "../../components/FileLayer/FileLayer";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import { useNavigate } from "react-router-dom";
import AddMarkerOnRightClick from "../AddMarkerOnRightClick/AddMarkerOnRightClick";
import Footer from "../Footer/Footer";
import { LateralListDiv } from "../../Views/HomeAdmin/HomeStyle";
import LateralItems from "../LateralItemsView/LateralItems";
import { SidebarDiv } from "../TopBar/TopBarStyle";
import Filtro from "../filtro/Filtro";
import Details from "../../Views/Details/Details";
import { Backdrop } from "@mui/material";

function MapaAdmin() {
  //* MODAL Functions
  const [modalIsOpen, setIsOpen] = useState(false);
  const [detailId, setDetailId] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allMarkers = useSelector((state) => state.markers);
  const mapstate = useSelector((state) => state.map);
  const openLateralList = useSelector((state) => state.openLateralList);
  const openState = useSelector((state) => state.openMain);

  ///modalstyle
  const modaltyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: " 2000 !important",
      backgroundColor:"transparent",
    },
  }

  const Modal__Overlay = {
    content: {
      backgroundColor:"transparent",
  }
  }

  //* MODAL Functions
  function openModal(id) {
    setIsOpen(true);
    setDetailId(id);
  }
  function closeModal() {
    setIsOpen(!modalIsOpen);
  }

  const defaultMarkerIcon = new L.icon({
    iconUrl: GerminarIcon,
    iconSize: [50, 50],
    /* iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/leafletgerminar.appspot.com/o/66334dee-c7ad-49e2-90c6-59f622fb481c?alt=media&token=8b567678-5fb3-4bcd-9a1b-c21994a352bb",
     */
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

  const SchoolMarkerIcon = new L.icon({
    iconUrl: SchoolIcon,
    iconSize: [50, 50],
    popupAnchor: [3, -46],
  });
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

  function opendetailPanel(id) {
    dispatch(/* setdetailPanel(id) */);
  }

  function verMasInfo(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    dispatch(getMarkers());
  }, [dispatch]);

  const ver = () => {
    console.log(allMarkers[0]);
  };
  return (
    <MapDiv>
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
            <ReactLeafletGoogleLayer type={"satellite"} />
          )}
          <MarkerClusterGroup>
            {allMarkers.map((el) => {
              return (
                <Marker
                  position={{
                    lat: el.latitude,
                    lng: el.longitude,
                  }}
                  key={el.updatedAt}
                  icon={
                    el.tipo === "hoja"
                      ? markerIcon
                      : el.tipo === "paw"
                      ? pawMarkerIcon
                      : el.tipo === "school"
                      ? SchoolMarkerIcon
                      : el.tipo === "Tree"
                      ? TreeMarkerIcon
                      : defaultMarkerIcon
                  }
                >
                  <Popup key={el._id}>
                    <PopupPlateDiv>
                      <TituloMarker>
                        <div className="popupTitle">{el.name}</div>
                      </TituloMarker>
                      {el.link && <p>{el.link}</p>}
                      {el.img && <img width="250px" src={el.img} />}
                      <div className="botones">
                        <button onClick={() => close(el._id)}> Borrar </button>
                        {/* openmodal button */}
                        <button
                          onClick={() => {
                            openModal(el._id);
                          }}
                        >
                          Mas Info
                        </button>
                        {/*                           <button onClick={() => verMasInfo(el._id)}>
                            Mas Info
                          </button> */}
                        <button onClick={() => openModifyPanel(el)}>
                          Modificar
                        </button>
                      </div>
                    </PopupPlateDiv>
                  </Popup>
                </Marker>
              );
            })}
            //*modal component
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={modaltyle}
              ariaHideApp={false}
              overlayClassName= {Modal__Overlay}
            > 
              <button onClick={closeModal}>X</button>
              <Details 
              id={detailId}
              />
            </Modal>
          </MarkerClusterGroup>
          <AddMarkerOnRightClick />
          {openLateralList === 1 && (
            <LateralListDiv>
              <LateralItems />
            </LateralListDiv>
          )}
          {openState === 2 && (
            <SidebarDiv>
              <Filtro />
            </SidebarDiv>
          )}
          <LeafletFileLayer />
        </MapContainer>
      </MapcontainerDiv>
    </MapDiv>
  );
}

export default MapaAdmin;
