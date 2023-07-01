import "../../App.css";
import {
  LateralListContainer,
  MainContainer,
  TopBarContainer,
  SidebarDiv,
} from "./TopBarStyle";
import Filtro from "../filtro/Filtro";
import { useDispatch, useSelector } from "react-redux";
import { changeMap, setOpenLateralList, setOpenOnMain } from "../../redux/actions";

function TopBar() {
  const dispatch = useDispatch();
  const openState = useSelector((state) => state.openMain);
  const openLateralList = useSelector((state) => state.openLateralList);
  const mapstate = useSelector((state) => state.map);

  function OpenOnMain(id) {
    if (openState === id) {
      dispatch(setOpenOnMain(0));
    } else {
      dispatch(setOpenOnMain(id));
    }
  }

  function OpenLateralList(id) {
    if (openLateralList === id) {
      dispatch(setOpenLateralList(0));
    } else {
      dispatch(setOpenLateralList(id));
    } 
  }

  function cambiarmapa() {
    dispatch(changeMap(mapstate === 1 ? 2 : 1));
  }
  function ver() {
    console.log(mapstate, "mapstate");
  }
  return (
    <MainContainer>
      <TopBarContainer>
        <div className="sidebar"
          style={{ width: (openState ===2) ? "40vw" : "0", transition: "1s" }}
        >
          <button onClick={() => OpenOnMain(2)}> Filtros</button>
          {(openState ===2) && <SidebarDiv><Filtro/></SidebarDiv>}
        </div>
      </TopBarContainer>
      <button onClick={() => cambiarmapa()}>CAMBIAR MAPA</button>
      <button onClick={() => ver()}>ver</button>
      <LateralListContainer>
        <div style={{ marginRight: (openLateralList ===1) ? "30vw" : "0", transition: "1s" }}>
      <button onClick={() => OpenLateralList(1)}> Marcadores</button>
      </div>
      </LateralListContainer>
    </MainContainer>
  );
}

export default TopBar;
