import SchoolIcon from "../../assets/Schoolcon.png";
import PawIcon from "../../assets/PawIcon.png";
import TreeIcon from "../../assets/TreeIcon.png";
import GerminarIcon from "../../assets/germinarIcon.png";

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
            Todos
          </ButtonFilter>
          <ButtonFilter
            className={`${filtro.includes("school") ? "special" : ""}`}
            onClick={(e) => handleFilterMarkers(e)}
            id="school"
          >
            Escuela
          </ButtonFilter>
          <ButtonFilter
            className={`${filtro.includes("ptoDeInteres") ? "special" : ""}`}
            onClick={(e) => handleFilterMarkers(e)}
            id="ptoDeInteres"
          >
            Germinar
          </ButtonFilter>
          <ButtonFilter
            className={`${filtro.includes("paw") ? "special" : ""}`}
            onClick={(e) => handleFilterMarkers(e)}
            id="paw"
          >
            Huella
          </ButtonFilter>
          <ButtonFilter
            className={`${filtro.includes("Tree") ? "special" : ""}`}
            onClick={(e) => handleFilterMarkers(e)}
            id="Tree"
          >
            Arbol
          </ButtonFilter>
    </MainContainer>
  )
}

export default Filtro