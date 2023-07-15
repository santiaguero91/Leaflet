import { useSelector } from "react-redux";
import { MainHomeDiv, NavBar, PopUpDiv } from "./HomeStyle";
import TopBar from "../../components/TopBar/TopBar";
import { useEffect } from "react";
import MapaAdmin from "../../components/Mapas/MapaAdmin";
import FormModify from "../../components/FormModify/FormModify"

function HomeAdmin() {

  const openMain = useSelector((state) => state.openMain);
  const openLateralList = useSelector((state) => state.openLateralList);
  const openModifyPanel = useSelector((state) => state.openModifyPanel);


  useEffect(() => {
    console.log(openModifyPanel);
  }, [openModifyPanel]);


console.log(openModifyPanel);
  return (
    <MainHomeDiv
    initial={{ opacity: 0}} 
    whileInView={{ opacity: 1, 
    transition:{duration:1}}}
    >
      <NavBar> 
      <TopBar />
      </NavBar>
    <PopUpDiv>{openMain === 1 && <Form/>}</PopUpDiv>
    <PopUpDiv>{openModifyPanel !== 0 && <FormModify/>}</PopUpDiv>
        <h4>MODO ADMIN</h4>
        //TODO Cambiar mapa a mapa admin
    <MapaAdmin/>

    </MainHomeDiv>
  )
}

export default HomeAdmin