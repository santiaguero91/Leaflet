import styled from "styled-components";
import { motion } from "framer-motion";

export const MainDiv = styled(motion.div)`
display: flex;
flex-direction: column;
width: 70vw;
height: fit-content;
padding-bottom: 2%;
place-self: center;
border-radius: 25px;
background-color: rgb(211,211,211);
box-shadow: rgba(0, 0, 0, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
color: black;
margin: 1% auto;
 img{
    border-radius: 15px;
 }
.boton{
    margin: 0 auto;
    width: 30%;
}
.formButtons{
margin-top: 2%;
display: flex;
flex-direction: row;
}
`;