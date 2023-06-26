import { useSelector } from "react-redux";
import Mapa2 from "../components/Mapa2"
import SideBar from "../components/sideBar/sideBar"
import Form from "../components/form/Form";
import { LateralListDiv, MainHomeDiv, PopUpDiv } from "./HomeStyle";
import LateralItems from "../components/LateralItemsView/LateralItems";

function Home() {

  const openMain = useSelector((state) => state.openMain);
  const openLateralList = useSelector((state) => state.openLateralList);

  function ver() {
    console.log(openMain);
  }

  return (
    <MainHomeDiv
    >
       {/* <button onClick={() => ver()}>VER</button> */}    
     <PopUpDiv>{openMain === 1 && <Form/>}</PopUpDiv>
    <SideBar />
    
    {openLateralList === 1 && <LateralListDiv
    ><LateralItems/></LateralListDiv>  }
    <Mapa2/>
    </MainHomeDiv>
  )
}

export default Home