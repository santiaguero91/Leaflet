import { useSelector } from "react-redux";
import { MainHomeDiv, NavBar, PopUpDiv } from "./HomeStyle";
import { useEffect } from "react";
import MapaAdmin from "../../components/Mapas/MapaAdmin";
import FormModify from "../../components/FormModify/FormModify";
import TopBar2 from "../../components/TopBarMui/TopBar2";

function HomeAdmin() {
  const openModifyPanel = useSelector((state) => state.openModifyPanel);

  useEffect(() => {
    console.log(openModifyPanel);
  }, [openModifyPanel]);

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
      <MapaAdmin />
    </MainHomeDiv>
  );
}

export default HomeAdmin;
