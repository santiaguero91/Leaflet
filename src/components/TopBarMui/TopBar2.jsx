import { useDispatch, useSelector } from "react-redux";
import UserButton from "../Auth/UserButton";
import { useAuth } from "../Auth/authContext";
import { MainStack, StyledButton, StyledTypography } from "./TopBar2Style";
import { useNavigate } from "react-router-dom";
import { changeMap, setOpenLateralList, setOpenOnMain } from "../../redux/actions";
import logo from "../../assets/Logo germinar.png"

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
      <img src={logo}/>


        <StyledButton style={{ 
          backgroundColor: openState === 2 ? "white" : "rgb(2,112,67)", 
          color: openState === 2 ? "black" : "initial",
          transition: "1s" }}
          variant="contained" onClick={() => OpenOnMain(2)}> <StyledTypography>Filtros</StyledTypography></StyledButton>
        {/* {openState === 2 && (
            <SidebarDiv>
              <Filtro />
            </SidebarDiv>
          )} */}



        <StyledButton style={{
          transition: "1s",
          backgroundColor: mapstate === 1 ? "white" : "rgb(2,112,67)",
          color: mapstate === 1 ? "black" : "initial",
        }} variant="contained" onClick={() => cambiarmapa()}> <StyledTypography>CAMBIAR MAPA <StyledTypography/></StyledTypography></StyledButton>
        <StyledButton style={{
          transition: "1s",
          backgroundColor: openLateralList === 1 ? "white" : "rgb(2,112,67)",
          color: openLateralList === 1 ? "black" : "initial",
        }} variant="contained" onClick={() => OpenLateralList(1)} > <StyledTypography>Marcadores <StyledTypography/></StyledTypography></StyledButton>
        <UserButton />
    </MainStack>
  );
}

export default TopBar2;
