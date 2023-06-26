

import { useDispatch} from "react-redux";
import "../../App.css"
import { useState } from "react";
import { MainContainer, ButtonFilter } from "./FiltroStyle";
import { filterMarkersByType } from "../../redux/actions";

function Filtro() {
    const dispatch = useDispatch();

    const [filtro, setFiltro] = useState("All");
    const [contador, setContador] = useState(0);







    function handleFilterMarkers(event) {
      let check = filtro.includes(event.target.id);
      if (check) {
        setFiltro(filtro.replace(event.target.id, ""));
         dispatch(filterMarkersByType(filtro.replace(event.target.id, "")));
       } else {
        setFiltro(filtro + event.target.id);
        dispatch(filterMarkersByType(filtro + event.target.id));
      }
      setContador(contador + 1);
    }

    /* function ver() {
      console.log(filtro);
    } */
  
    function handleNoFilter(event) {
      setFiltro("All");
       dispatch(filterMarkersByType(event.target.id));
      setContador(contador + 1);
    }

  return (
    <MainContainer>
          <ButtonFilter
            className={`${filtro === "All" ? "special" : ""}`}
            onClick={(e) => handleNoFilter(e)}
            id="All"
          >
            ALL
          </ButtonFilter>
          <ButtonFilter
            className={`${filtro.includes("educacion") ? "special" : ""}`}
            onClick={(e) => handleFilterMarkers(e)}
            id="educacion"
          >
            EDUCACION
          </ButtonFilter>
          <ButtonFilter
            className={`${filtro.includes("pto turstico") ? "special" : ""}`}
            onClick={(e) => handleFilterMarkers(e)}
            id="pto turstico"
          >
            PUNTOS TURISTICOS
          </ButtonFilter>
          <ButtonFilter
            className={`${filtro.includes("castillo") ? "special" : ""}`}
            onClick={(e) => handleFilterMarkers(e)}
            id="castillo"
          >
            CASTILLOS
          </ButtonFilter>
          <ButtonFilter
            className={`${filtro.includes("iglesia") ? "special" : ""}`}
            onClick={(e) => handleFilterMarkers(e)}
            id="iglesia"
          >
            IGLESIAS
          </ButtonFilter>
    </MainContainer>
  )
}

export default Filtro