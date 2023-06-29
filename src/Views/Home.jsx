import { useSelector } from "react-redux";
import Mapa2 from "../components/Mapa2"
import TopBar from "../components/TopBar/TopBar"
import Form from "../components/form/Form";
import { LateralListDiv, MainHomeDiv, NavBar, PopUpDiv } from "./HomeStyle";
import LateralItems from "../components/LateralItemsView/LateralItems";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import FormModify from "../components/FormModify/FormModify";

function Home() {

  const openMain = useSelector((state) => state.openMain);
  const openLateralList = useSelector((state) => state.openLateralList);
  const openModifyPanel = useSelector((state) => state.openModifyPanel);


  return (
    <MainHomeDiv
    >
      <NavBar> 
      <TopBar />
      </NavBar>
    <PopUpDiv>{openMain === 1 && <Form/>}</PopUpDiv>
    <PopUpDiv>{openModifyPanel !== 0 && <FormModify/>}</PopUpDiv>

    {openLateralList === 1 && <LateralListDiv
    ><LateralItems/></LateralListDiv>  }
    <Mapa2/>
    </MainHomeDiv>
  )
}

export default Home