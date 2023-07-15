import { useSelector } from "react-redux";
import Mapa2 from "../components/Mapa2"
import TopBar from "../components/TopBar/TopBar"
import Form from "../components/form/Form";
import { LateralListDiv, MainHomeDiv, NavBar, PopUpDiv } from "./HomeStyle";
import LateralItems from "../components/LateralItemsView/LateralItems";
import FormModify from "../components/FormModify/FormModify";
import { useEffect } from "react";
import Footer from "../components/Footer/Footer";

function Home() {

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

{/*     {openLateralList === 1 && <LateralListDiv
    ><LateralItems/></LateralListDiv>  } */}
    <Mapa2/>
    </MainHomeDiv>
  )
}

export default Home