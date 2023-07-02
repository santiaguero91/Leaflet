import styled from "styled-components";
import { motion } from "framer-motion";

export const MainDiv = styled(motion.div)`
display: flex;
flex-direction: column;
width: 70vw;
height: 70vh;
place-self: center;
border-radius: 25px;
background-color: transparent;
color: black;
 img{
    border-radius: 15px;
 }
.boton{
    margin: 0 auto;
    width: 30%;
}

`;
export const FrontCardDiv = styled(motion.div)`
border: 1px solid blue;
width: 100%;
height: 70vh;
background-color: rgb(211,211,211);
box-shadow: rgba(0, 0, 0, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
border-radius: 45px;
`;

export const BackCardDiv = styled(motion.div)`
border: 1px solid blue;
width: 100%;
height: 70vh;
background-color: rgb(211,211,211);
box-shadow: rgba(0, 0, 0, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
border-radius: 45px;

`;