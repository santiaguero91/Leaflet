import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: 1s;
  background-color: rgb(87, 87, 87);
  width: 100vw;
  height: 40px;
  z-index: 2000 !important;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const SelectIcon = styled.img`
  cursor: pointer;
  gap: 2%;
  margin: 0 0.5%;
  width: 100px;
  height: 100px;
  border-radius: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const FilterIcon = styled.img`
  cursor: pointer;
  gap: 2%;
  margin: 0 auto;
  width: 20%;
  height: 20%;
  border-radius: 15px;
  background-color: rgba(185, 185, 185);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;


export const TopBarContainer = styled.div`
  position: relative;
  transition: 1s;
  background-color: #000;
  height: 100%;
  margin-left: 1%;
  z-index: 2000 !important;
  .sidebar {
    background-color: transparent;
  }
`;

export const UserButtonContainer = styled.div`
  position: relative;
  transition: 1s;
  background-color: #000;
  height: 100%;
  z-index: 2000 !important;
  margin-right: 1%;
`;

export const SidebarDiv = styled.div`
 /*  background-color: #1a1a1a;
  color: #fff;
  font-size: 22px;
  top: 0;
  z-index: 2000 !important; */
`;

export const MarcadoresButton = styled.button`
  border-radius: 8px;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: rgb(2, 112, 67);
  cursor: pointer;
  transition: border-color 0.25s;
  :hover {
    border-color: #646cff;
  }
  :focus,
  :focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
