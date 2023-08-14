import { useSelector } from "react-redux";
import Mapa2 from "../components/Mapas/Mapa2";
import {
  MainHomeDiv,
  PopUpDiv,
} from "./HomeAdmin/HomeStyle";
import FormModify from "../components/FormModify/FormModify";
import { useEffect } from "react";
import TopBar2 from "../components/TopBarMui/TopBar2";

function Home({loadMarkers}) {
  const openModifyPanel = useSelector((state) => state.openModifyPanel);

  useEffect(() => {
  }, [openModifyPanel]);

  return (
    <MainHomeDiv
      initial={{ opacity: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
    >
      <TopBar2 />
      <PopUpDiv>{openModifyPanel !== 0 && <FormModify />}</PopUpDiv>

      <Mapa2 loadMarkers={loadMarkers}/>
    </MainHomeDiv>
  );
}

export default Home;
