import styled from "styled-components";
import { motion } from "framer-motion";


export const LateralItemsDiv = styled(motion.div)`
display: flex;
flex-direction: column;
position: absolute;
background-color: #fff;
height: fit-content;
width: 30%;
z-index: 2000 !important;
top: 0;
right: 0;
color: black;
`;

export const MarkersNamesDiv = styled.div`
width: 100%;
height: fit-content;
color: black;
`;



