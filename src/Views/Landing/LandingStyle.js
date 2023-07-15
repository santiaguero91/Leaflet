import styled from "styled-components";
import { motion } from "framer-motion";

export const MainLandingDiv = styled(motion.div)`
background-color: #333;
width: 100vw;
height: 100vh;
overflow: hidden;

  .photo7 {
    position: relative;
    top: 8%;
    left: 10%;
    width: 33%;
  }

  .photo6 {
    position: relative;
    top: 60%;
    right: 20%;
    width: 30%;
  }
  .photo5 {
    position: relative;
    top: 0%;
    left: 80%;
    width: 32%;
  }

  
  .photo3 {
    position: relative;
    top: -20%;
    left: 70%;
    width: 40%;
  }

  .photo2{
    position: relative;
    bottom: -50%;
    right: -120%;
    width: 31%;
  }
  .photo1 {
    position: relative;
    top: 10%;
    right: 0%;
    width: 33%;
  }
  
  .photo8 {
    position: relative;
    bottom: -50%;
    right: 130%;
    width: 26%;
  }
`;


export const LogInDiv = styled(motion.div)`
position: absolute;
right: 50%;
top: 40%;
color: white;
background-color:  #354A21;
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
