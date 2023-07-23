import { useDispatch, useSelector } from "react-redux";
import UserButton from "../Auth/UserButton";
import { useAuth } from "../Auth/authContext";
import { MainStack, StyledButton } from "./TopBar2Style";
import { useNavigate } from "react-router-dom";
import { changeMap, setOpenLateralList, setOpenOnMain } from "../../redux/actions";
import { SidebarDiv } from "../TopBar/TopBarStyle";
import Filtro from "../filtro/Filtro";

function TopBar2() {
  const { user, logout, loading } = useAuth();
  const dispatch = useDispatch();
  const openState = useSelector((state) => state.openMain);
  const openLateralList = useSelector((state) => state.openLateralList);
  const mapstate = useSelector((state) => state.map);
  const navigate = useNavigate();

  function OpenOnMain(id) {
    if (openState === id) {
      dispatch(setOpenOnMain(0));
    } else {
      dispatch(setOpenOnMain(id));
    }
  }

  if (loading) return <h1>loading</h1>;
  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

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
    <MainStack>
        <div style={{ width: openState === 2 ? "40vw" : "0", transition: "1s" }}>
        <StyledButton variant="contained" onClick={() => OpenOnMain(2)}> Filtros</StyledButton>
        {/* {openState === 2 && (
            <SidebarDiv>
              <Filtro />
            </SidebarDiv>
          )} */}
        </div>


        <StyledButton style={{
          transition: "1s",
          backgroundColor: mapstate === 1 ? "white" : "rgb(2,112,67)",
          color: mapstate === 1 ? "black" : "initial",
        }} variant="contained" onClick={() => cambiarmapa()}>CAMBIAR MAPA</StyledButton>
        <StyledButton style={{
          transition: "1s",
          backgroundColor: openLateralList === 1 ? "white" : "rgb(2,112,67)",
          color: openLateralList === 1 ? "black" : "initial",
        }} variant="contained" onClick={() => OpenLateralList(1)} >Marcadores</StyledButton>
        <UserButton />
    </MainStack>
  );
}

export default TopBar2;
