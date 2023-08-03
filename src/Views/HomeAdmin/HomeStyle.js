import styled from "styled-components";
import { motion } from "framer-motion";

export const MainHomeDiv = styled(motion.div)`
    background: linear-gradient(45deg,  red,  yellow);
    h4{
      margin-top: 0.4rem;
      margin-bottom: 0.4rem;
      font-size: 16px;
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

`;

export const PopUpDiv = styled(motion.div)`
  display: flex;
  position: absolute;
  transition: 1s;
  background-color: transparent;
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

