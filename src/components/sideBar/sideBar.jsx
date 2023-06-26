import { useState } from "react";
import "../../App.css";
import {
  FormContainer,
  MainContainer,
  SideBarContainer,
  SidebarDiv,
} from "./sideBarStyle";
import Form from "../form/Form";
import Filtro from "../filtro/Filtro";
import { useDispatch, useSelector } from "react-redux";
import { setOpenOnMain } from "../../redux/actions";

function SideBar() {
  const dispatch = useDispatch();
  const openState = useSelector((state) => state.openMain);

  function OpenOnMain(id) {
    if (openState === id) {
      dispatch(setOpenOnMain(0));
    } else {
      dispatch(setOpenOnMain(id));
    } 
  }

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const toggleSidebar = () => setSidebarIsOpen(!sidebarIsOpen);

  return (
    <MainContainer>
      <SideBarContainer>
        <div
          style={{ width: sidebarIsOpen ? "50vw" : "0", transition: "1s" }}
          className="sidebar"
        >
          <button onClick={toggleSidebar}> SIDEBAR</button>
          {sidebarIsOpen && <SidebarDiv><Filtro/></SidebarDiv>}
        </div>
      </SideBarContainer>
      <FormContainer>
        <div>
          <button onClick={() => OpenOnMain(1)}> FORM</button>
        </div>
      </FormContainer>
    </MainContainer>
  );
}

export default SideBar;
