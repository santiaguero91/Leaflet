import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import {
  DivMarcador,
  LateralItemsDiv,
  LoadingIMG,
  MarkersNamesDiv,
} from "./LateralItemsStyle";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import ButtonsPopUp from "./ButtonsPopUp";
import { postMarker } from "../../redux/actions";

function LateralItems() {
  const allMarkers = useSelector((state) => state.markers);
  // eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [markersPerPage, setMarkersPerPage] = useState(6);
  const indexOfLastMarker = currentPage * markersPerPage;
  // eslint-disable-next-line
  const indexOfFirstMarker = indexOfLastMarker - markersPerPage;
  const locationMarkers = allMarkers.filter((el) => el.tipo !== "hoja");
  const currentMarkers = locationMarkers.slice(0, currentPage * markersPerPage);
  
  const [markerPosition, setMarkerPosition] = useState(null);

  const dispatch = useDispatch();

  let [input, setInput] = useState({
    name: "",
    latitude: "",
    longitude:"",
    img: "",
    link: "",
    tipo: "",
  });  
  const map = useMap();

  const addPage = () => {
  };

  const moverMapa = (lat, lng) => {
    map.flyTo([lat, lng], 17);
  };
  const saveLocation = () => {
    console.log(input);
    dispatch(postMarker(input)); 
  };


  const myLocation = () => {
    map.locate();
    map.on("locationfound", (e) => {
      moverMapa(e.latlng.lat, e.latlng.lng);
      setMarkerPosition({lat: e.latlng.lat, lng: e.latlng.lng})
      setInput({
        name: "newmarker",
        latitude: e.latlng.lat,
        longitude: e.latlng.lng,
        img: "",
        link: "",
        tipo: "",
      });
      var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);      



  });
   };

  return (
    <LateralItemsDiv
      initial={{ width: 0 }}
      animate={{ width: "20vw", transition: { duration: 0.8 } }}
      exit={{ width: 0, duration: 0.8 }}
    >
      <h2>Puntos de interes</h2>
      <button onClick={() => myLocation()}> My Location</button>
      {(markerPosition) && <button onClick={() => saveLocation()}> Save Location</button>
}

      <InfiniteScroll
        dataLength={locationMarkers.length}
        next={() => addPage()}
        hasMore={true}
        loader={
          locationMarkers.length >= locationMarkers.length ? (
            ""
          ) : (
            <LoadingIMG>
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </LoadingIMG>
          )
        }
      >
        <MarkersNamesDiv>
          {locationMarkers.map((el) => {
            return (
              <div>
                <DivMarcador
                  key={el._id}
                  onClick={() => moverMapa(el.latitude, el.longitude)}
                >
                  {el.name}
                </DivMarcador>
              </div>
            );
          })}
        </MarkersNamesDiv>
      </InfiniteScroll>
    </LateralItemsDiv>
  );
}

export default LateralItems;
