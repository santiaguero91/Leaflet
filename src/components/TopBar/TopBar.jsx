import "../../App.css";
import {
  MainContainer,
  TopBarContainer,
  SidebarDiv,
  UserButtonContainer,
  MarcadoresButton,
} from "./TopBarStyle";
import Filtro from "../filtro/Filtro";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMap,
  setOpenLateralList,
  setOpenOnMain,
} from "../../redux/actions";
import { useAuth } from "../../components/Auth/authContext";
import { useNavigate } from "react-router-dom";
import UserButton from "../Auth/UserButton";

function TopBar() {
  const { user, logout, loading } = useAuth();
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

  if (loading) return <h1>loading</h1>;

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

  return (
    <MainContainer>
      <TopBarContainer>
        <div >
          <button onClick={() => OpenOnMain(2)}> Filtros</button>
          {openState === 2 && (
            <SidebarDiv>
              <Filtro />
            </SidebarDiv>
          )}
        </div>
      </TopBarContainer>
      <button onClick={() => cambiarmapa()}>CAMBIAR MAPA</button>
      <MarcadoresButton
        style={{
          transition: "1s",
          backgroundColor: openLateralList === 1 ? "white" : "rgb(2,112,67)",
          color: openLateralList === 1 ? "black" : "initial",
        }} onClick={() => OpenLateralList(1)} >Marcadores
      </MarcadoresButton>
      <UserButtonContainer>
      </UserButtonContainer>
    </MainContainer>
  );
}

export default TopBar;
