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
import LateralMarkerCard from "./LateralMarkerCard";
import { useMap } from "react-leaflet";
import L from "leaflet";

function LateralItems() {
  const allMarkers = useSelector((state) => state.markers);
  // eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [productsPerPage, setProductsPerPage] = useState(6);
  const indexOfLastCountry = currentPage * productsPerPage;
  // eslint-disable-next-line
  const indexOfFirstCountry = indexOfLastCountry - productsPerPage;
  const locationMarkers = allMarkers.filter((el) => el.tipo !== "hoja");
  const currentMarkers = allMarkers.slice(0, currentPage * productsPerPage);

  function ver() {
    console.log(locationMarkers);
  }
  const map = useMap();

  const addPage = () => {
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
    }, 500);
  };

  const moverMapa = (lat, lng) => {
    map.setView([lat, lng], 17);
  };

  return (
    <LateralItemsDiv
      initial={{ width: 0 }}
      animate={{ width: "30vw", transition: { duration: 0.8 } }}
      exit={{ width: 0, duration: 0.8 }}
    >
      <h2>Puntos de interes</h2>

      <InfiniteScroll
        dataLength={currentMarkers.length}
        next={() => addPage()}
        hasMore={true}
        loader={
          allMarkers.length >= currentMarkers.length ? (
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
                <DivMarcador onClick={()=>moverMapa(el.latitude, el.longitude)}>{el.name}</DivMarcador>
              </div>
              /* <LateralMarkerCard
                key={el._id}
                id={el._id}
                name={el.name}                
              /> */
            );
          })}
        </MarkersNamesDiv>
      </InfiniteScroll>
    </LateralItemsDiv>
  );
}

export default LateralItems;
