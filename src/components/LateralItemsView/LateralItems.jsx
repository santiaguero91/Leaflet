import { useSelector } from "react-redux";
import "../../App.css";
import {
  DivMarcador,
  LateralItemsDiv,
  LoadingIMG,
  MarkersNamesDiv,
} from "./LateralItemsStyle";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { useMap } from "react-leaflet";

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

  function ver() {
    console.log(currentMarkers , "currentMarkers");
    console.log(locationMarkers , "locationMarkers");
    console.log(currentPage , "currentPage");

  }
  const map = useMap();

  const addPage = () => {
    console.log("cargando");
    /* setTimeout(() => {
      setCurrentPage(currentPage + 1);
    }, 500); */
  };

  const moverMapa = (lat, lng) => {
    map.setView([lat, lng], 17);
  };

  return (
    <LateralItemsDiv
      initial={{ width: 0 }}
      animate={{ width: "20vw", transition: { duration: 0.8 } }}
      exit={{ width: 0, duration: 0.8 }}
    >
      <h2>Puntos de interes</h2>

      <InfiniteScroll
        dataLength={  locationMarkers.length }
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
                <DivMarcador key={el._id} onClick={()=>moverMapa(el.latitude, el.longitude)}>{el.name}</DivMarcador>
              </div>
            );
          })}
        </MarkersNamesDiv>
      </InfiniteScroll>
    </LateralItemsDiv>
  );
}

export default LateralItems;
