import { useSelector } from "react-redux";
import Mapa2 from "../components/Mapa2"
import SideBar from "../components/sideBar/sideBar"
import Form from "../components/form/Form";
import { PopUpDiv } from "./HomeStyle";

function Home() {

  const openState = useSelector((state) => state.openMain);

  function ver() {
    console.log(openState);
  }

  return (
    <div>
       {/* <button onClick={() => ver()}>VER</button> */}    
     <PopUpDiv>{openState === 1 && <Form/>}</PopUpDiv>
    <SideBar />
    <Mapa2/>
    </div>
  )
}

export default Home