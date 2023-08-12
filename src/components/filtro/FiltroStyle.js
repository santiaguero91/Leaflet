import styled from "styled-components";
import { motion } from "framer-motion";

export const MainContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1000 !important;

  top: 0;
  left: 0;

  background-color: rgba(211, 211, 211);
  width: 40%;
  margin: 0 auto;
  padding-bottom: 4%;
  border-radius: 0px 10px 10px 0;

  .special {
    display: flex;
    flex-direction: column;
    background-color: rgba(99, 99, 99);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    padding: 2px;
    margin: 0 auto 2% auto;
  }
`;

export const ButtonFilter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  margin: 0 auto 2% auto;
  padding: 1%;
  width: 70%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  cursor: pointer;
`;
