import styled from "styled-components";
import { motion } from "framer-motion";


export const LogInDiv = styled(motion.div)`
position: absolute;
right: 50%;
top: 40%;
color: #354A21;
background-color: white;
border: 1px solid white;
border-radius: 10px;
padding: 10px;
cursor: pointer;
z-index: 500;
transition: 1s;
font-weight: 500;
font-size: 20px;

:hover{
background-color: white;
color: #354A21;
}
`;


export const MainLandingDiv = styled(motion.div)`
background-color: #333;
width: 100vw;
height: 100vh;
overflow: hidden;
  .photo1 {
    position: relative;
    top: 10%;
    right: -10%;
    width: 53%;
  }
    .photo2{
    position: relative;
    bottom: -40%;
    left: 100%;
    width: 31%;
  }
  .photo3 {
    position: relative;
    bottom: -50%;
    left: 0%;
    width: 40%;
  }
  .photo5 {
    position: relative;
    top: -40%;
    left: 200%;
    width: 37%;
  }
  .photo6 {
    position: relative;
    top: 30%;
    left: 40%;
    width: 30%;
  }
  .photo7 {
    position: relative;
    top:30%;
    left: -200%;
    width: 33%;
  }
  .photo8 {
    position: relative;
    bottom: -60%;
    right: 110%;
    width: 26%;
  }
`;

