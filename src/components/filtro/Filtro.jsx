

import { useDispatch, useSelector } from "react-redux";
import "../../App.css"
import { useState } from "react";
import { MainContainer } from "./FiltroStyle";
function Filtro() {
    const allMarkers = useSelector((state) => state.markers);
    const dispatch = useDispatch();

    const [filtro, setFiltro] = useState("All");
    const [contador, setContador] = useState(0);

    function handleFilterContinent(event) {
      let check = filtro.includes(event.target.id);
      if (check) {
        setFiltro(filtro.replace(event.target.id, ""));
/*         dispatch(filterCountriesByContinent(filtro.replace(event.target.id, "")));
 */      } else {
        console.log("esto");
        setFiltro(filtro + event.target.id);
/*         dispatch(filterCountriesByContinent(filtro + event.target.id));
 */      }
      setContador(contador + 1);
    }
  
  
    function handleNoFilter(event) {
      setFiltro("All");
/*       dispatch(filterCountriesByContinent(event.target.id));*/
      setContador(contador + 1);
    }

  return (
    <MainContainer>
          <button
            className={`${filtro === "All" ? "special" : ""}`}
            onClick={(e) => handleNoFilter(e)}
            id="All"
          >
            ALL
          </button>
          <button
            className={`${filtro.includes("educacion") ? "special" : ""}`}
            onClick={(e) => handleFilterContinent(e)}
            id="educacion"
          >
            EDUCACION
          </button>
          <button
            className={`${filtro.includes("pto turstico") ? "special" : ""}`}
            onClick={(e) => handleFilterContinent(e)}
            id="pto turstico"
          >
            PUNTOS TURISTICOS
          </button>
          <button
            className={`${filtro.includes("castillo") ? "special" : ""}`}
            onClick={(e) => handleFilterContinent(e)}
            id="castillo"
          >
            CASTILLOS
          </button>
          <button
            className={`${filtro.includes("iglesia") ? "special" : ""}`}
            onClick={(e) => handleFilterContinent(e)}
            id="iglesia"
          >
            IGLESIAS
          </button>
    </MainContainer>
  )
}

export default Filtro