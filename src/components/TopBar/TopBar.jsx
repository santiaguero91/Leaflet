import "../../App.css";
import {
  LateralListContainer,
  MainContainer,
  TopBarContainer,
  SidebarDiv,
} from "./TopBarStyle";
import Filtro from "../filtro/Filtro";
import { useDispatch, useSelector } from "react-redux";
import { setOpenLateralList, setOpenOnMain } from "../../redux/actions";

function TopBar() {
  const dispatch = useDispatch();
  const openState = useSelector((state) => state.openMain);
  const openLateralList = useSelector((state) => state.openLateralList);

  function OpenOnMain(id) {
    if (openState === id) {
      dispatch(setOpenOnMain(0));
    } else {
      dispatch(setOpenOnMain(id));
    }
  }


  function OpenLateralList(id) {
    if (openLateralList === id) {
      dispatch(setOpenLateralList(0));
    } else {
      dispatch(setOpenLateralList(id));
    } 
  }
  return (
    <MainContainer>
      <TopBarContainer>
        <div className="sidebar"
          style={{ width: (openState ===2) ? "40vw" : "0", transition: "1s" }}
        >
          <button onClick={() => OpenOnMain(2)}> Filtros</button>
          {(openState ===2) && <SidebarDiv><Filtro/></SidebarDiv>}
        </div>
      </TopBarContainer>

      <LateralListContainer>
        <div style={{ marginRight: (openLateralList ===1) ? "30vw" : "0", transition: "1s" }}>
      <button onClick={() => OpenLateralList(1)}> Marcadores</button>
      </div>
      </LateralListContainer>
    </MainContainer>
  );
}

export default TopBar;
