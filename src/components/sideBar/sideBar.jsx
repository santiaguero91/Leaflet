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

function SideBar() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const toggleSidebar = () => setSidebarIsOpen(!sidebarIsOpen);
  const toggleForm = () => setFormIsOpen(!formIsOpen);

  return (
    <MainContainer>
      <SideBarContainer>
        <div
          style={{ width: sidebarIsOpen ? "50vw" : "0", transition: "1s" }}
          className="sidebar"
        >
          <button onClick={toggleSidebar}> SIDEBAR</button>
          {sidebarIsOpen && <SidebarDiv><button><Filtro/></button></SidebarDiv>}
        </div>
      </SideBarContainer>
      <FormContainer>
        <div
          style={{ width: formIsOpen ? "50vw" : "0", transition: "1s" }}
          className="sidebar"
        >
          <button onClick={toggleForm}> FORM</button>
          {formIsOpen && <Form />}
        </div>
      </FormContainer>
    </MainContainer>
  );
}

export default SideBar;
