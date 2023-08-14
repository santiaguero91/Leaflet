import { useSelector } from "react-redux";
import { MainHomeDiv, PopUpDiv } from "./HomeStyle";
import MapaAdmin from "../../components/Mapas/MapaAdmin";
import FormModify from "../../components/FormModify/FormModify";
import TopBar2 from "../../components/TopBarMui/TopBar2";
import ModoAdmin from "../../components/Mapas/ModoAdmin";

function HomeAdmin({loadMarkers}) {
  const openModifyPanel = useSelector((state) => state.openModifyPanel);
  return (
    <MainHomeDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <TopBar2 />
      <PopUpDiv>{openModifyPanel !== 0 && <FormModify />}</PopUpDiv>
      <div className="modoAdmin">
        <h4>Estas en modo administrador</h4>
      </div>
      <ModoAdmin loadMarkers={loadMarkers}/>
    </MainHomeDiv>
  );
}

export default HomeAdmin;
