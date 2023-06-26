import { useSelector } from "react-redux";
import Mapa2 from "../components/Mapa2"
import SideBar from "../components/sideBar/sideBar"
import Form from "../components/form/Form";
import { PopUpDiv } from "./HomeStyle";
import LateralItems from "../components/LateralItemsView/LateralItems";

function Home() {

  const openMain = useSelector((state) => state.openMain);
  const openLateral = useSelector((state) => state.openLateral);

  function ver() {
    console.log(openMain);
  }

  return (
    <div>
       {/* <button onClick={() => ver()}>VER</button> */}    
     <PopUpDiv>{openMain === 1 && <Form/>}</PopUpDiv>
    <SideBar />
    {/* <LateralItems/> */}
    <Mapa2/>
    </div>
  )
}

export default Home