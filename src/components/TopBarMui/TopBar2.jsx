import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../Auth/authContext";
import { MainStack, Passmenu, StyledButton, StyledTypography, StyledTypographyHome } from "./TopBar2Style";
import { useNavigate } from "react-router-dom";
import { changeMap, getUsers, setOpenLateralList, setOpenOnMain } from "../../redux/actions";
import logo from "../../assets/Logo germinar.png"
import { useEffect, useState } from "react";
import { Password } from "../Auth/Password";

function TopBar2() {
  const { user, logout, loading } = useAuth();
  const dispatch = useDispatch();
  const openState = useSelector((state) => state.openMain);
  const openLateralList = useSelector((state) => state.openLateralList);
  const mapstate = useSelector((state) => state.map);
  const navigate = useNavigate();
  const { pathname } = window.location;
  const [active, setActive] = useState(0);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  function menu() {
    active === 0 ? setActive(2) : setActive(0)
  }

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



  function volver() {
    navigate("/")
  }

  function germinar() {

    {
      pathname === "/" && 
      window.open("https://germinar.org.ar", '_blank');
    }
    {
      pathname !== "/" && 
      menu()    
    }
  }

  function cambiarmapa() {
    dispatch(changeMap(mapstate === 1 ? 2 : 1));
  }
  return (
    <MainStack>
      <img src={logo} onClick={() => germinar()} style={{ cursor: 'pointer' }}/>
      {/* <div onClick={() => menu()}>open</div> */}
        <StyledButton style={{ 
          backgroundColor: openState === 2 ? "white" : "rgb(2,112,67)", 
          color: openState === 2 ? "black" : "initial",
          transition: "1s" }}
          variant="contained" onClick={() => OpenOnMain(2)}> <StyledTypography>Filtros</StyledTypography></StyledButton>


        <StyledButton style={{
          transition: "1s",
          backgroundColor: mapstate === 1 ? "white" : "rgb(2,112,67)",
          color: mapstate === 1 ? "black" : "initial",
        }} variant="contained" onClick={() => cambiarmapa()}> <StyledTypography>CAMBIAR MAPA </StyledTypography></StyledButton>
        
        
        <StyledButton style={{
          transition: "1s",
          backgroundColor: openLateralList === 1 ? "white" : "rgb(2,112,67)",
          color: openLateralList === 1 ? "black" : "initial",
        }} variant="contained" onClick={() => OpenLateralList(1)} > <StyledTypography>Marcadores </StyledTypography></StyledButton>
{
  pathname === "/admin" && 
  <StyledButton variant="contained" onClick={() => volver()}> <StyledTypographyHome>Home</StyledTypographyHome></StyledButton>
}
{
  active !== 0 && <Passmenu>
    <Password menu={menu}/>
  </Passmenu>
}

    </MainStack>
  );
}

export default TopBar2;
