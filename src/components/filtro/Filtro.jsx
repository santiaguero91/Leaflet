import SchoolIcon from "../../assets/Schoolcon.png";
import PawIcon from "../../assets/PawIcon.png";
import TreeIcon from "../../assets/TreeIcon.png";
import GerminarIcon from "../../assets/germinarIcon.png";

import { useDispatch } from "react-redux";
import "../../App.css";
import { useState } from "react";
import { MainContainer, ButtonFilter } from "./FiltroStyle";
import { filterMarkersByType } from "../../redux/actions";
import { FilterIcon } from "../TopBar/TopBarStyle";

function Filtro() {
  const dispatch = useDispatch();

  const [filtro, setFiltro] = useState("All");
  const [contador, setContador] = useState(0);

  function handleFilterMarkers(event) {
    let check = filtro.includes(event);
    if (check) {
      setFiltro(filtro.replace(event, ""));
      dispatch(filterMarkersByType(filtro.replace(event, "")));
    } else {
      setFiltro(filtro + event);
      dispatch(filterMarkersByType(filtro + event));
    }
    setContador(contador + 1);
  }

  function handleNoFilter(event) {
    setFiltro("All");
    dispatch(filterMarkersByType(event.target.id));
    setContador(contador + 1);
  }

  return (
    <MainContainer
    initial={{ width: 0 }}
      animate={{ width: "20vw", transition: { duration: 0.8 } }}
      exit={{ width: 0, transition: { duration: 0.8 } }}
    >
      <ButtonFilter
        className={`${filtro === "All" ? "special" : ""}`}
        onClick={(e) => handleNoFilter(e)}
        id="All"
      >
        Todos
      </ButtonFilter>
      <FilterIcon
        name="Tree"
        src={TreeIcon}
        onClick={(e) => handleFilterMarkers("Tree")}
        style={
          filtro.includes("Tree")
            ? { boxShadow: "rgba(00, 00, 00, 0.8) 0px 2px 8px 0px" }
            : { border: "none" }
        }
      />
      <FilterIcon
        name="school"
        src={SchoolIcon}
        onClick={(e) => handleFilterMarkers("school")}
        style={
          filtro.includes("school")
            ? { boxShadow: "rgba(00, 00, 00, 0.8) 0px 2px 8px 0px" }
            : { border: "none" }
        }
      />
      <FilterIcon
        src={PawIcon}
        onClick={(e) => handleFilterMarkers("paw")}
        name="paw"
        style={
          filtro.includes("paw")
            ? { boxShadow: "rgba(00, 00, 00, 0.8) 0px 2px 8px 0px" }
            : { border: "none" }
        }
      />
      <FilterIcon
        name="ptoDeInteres"
        src={GerminarIcon}
        onClick={(e) => handleFilterMarkers("ptoDeInteres")}
        style={
          filtro.includes("ptoDeInteres")
            ? { boxShadow: "rgba(00, 00, 00, 0.8) 0px 2px 8px 0px" }
            : { border: "none" }
        }
      />
    </MainContainer>
  );
}

export default Filtro;
