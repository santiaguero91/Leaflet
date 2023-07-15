import styled from "styled-components";
import { motion } from "framer-motion";

export const MainHomeDiv = styled(motion.div)`
`;

export const PopUpDiv = styled(motion.div)`
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

export const LateralListDiv = styled(motion.div)` 
`;

export const Plate = styled.div`
  border: none;
  width: fit-content;
  height: fit-content;
  margin: 20px 0 20px 0;
  cursor: pointer;
  background-color: rgba(111, 111, 111);
  font-weight: 800;
  z-index: -2;
`;

export const MapDiv = styled.div`
  display: flex;
  flex-direction: column;
  z-index: -2;
`;



export const NavBar = styled.div`
  display: flex;
  margin-bottom: 10px;

`;
