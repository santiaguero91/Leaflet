import styled from "styled-components";
import { SidebarDiv } from "../components/sideBar/sideBarStyle";

export const Plate = styled.div`
  border: none;
  width: fit-content;
  height: fit-content;
  margin: 20px 20px 20px 20px;
  cursor: pointer;
  background-color: rgba(111, 111, 111);
  font-weight: 800;
  z-index: -2;
`;

export const MapDiv = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  z-index: -2;
`;

export const PopUpDiv = styled.div`
  display: flex;
  position: absolute;
  transition: 1s;
  background-color: #000;
  height: fit-content;
  width: fit-content;
  top: 50%;
  left: 50%;
  border-radius: 25px;
  transform: translate(-50%, -50%);
  z-index: 2000 !important;
`;
