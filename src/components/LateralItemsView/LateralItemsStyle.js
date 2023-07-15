import styled from "styled-components";
import { motion } from "framer-motion";


export const LateralItemsDiv = styled(motion.div)`
display: flex;
flex-direction: column;
position: absolute;
background-color: #fff;
z-index: 2000 !important;
top: 0;
right: 0;
color: black;

  height: 100vh;
  gap: 1em;
  padding-bottom: 2em;
  padding: 1%;


`;

export const DivMarcador = styled.button`
width: 100%;
margin: 2% 0;
padding: 5%;
height: fit-content;
color: black;
background-color: rgba(245,245,245,1);

font-size: 14px;
font-weight: 550;
`;


export const MarkersNamesDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
color: black;

height: 70vh;
overflow-x: hidden;
overflow-y: scroll;
`;

export const LoadingIMG = styled.h4`
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 40px;
    height: 40px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 44px;
    height: 44px;
    margin: 8px;
    border: 8px solid #ccc;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #ccc transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
