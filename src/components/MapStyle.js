import styled from "styled-components";



export const MapDiv = styled.div`
  position: relative;
  width: 100vw;
  flex-direction: column;
  z-index: -2;
    button {
    width: fit-content;
  }
`;

export const MapcontainerDiv = styled.div`
position: relative;
width: fit-content;
height: fit-content;
border: 1px solid yellow;
margin: 0 auto;
`;

export const TituloMarker = styled.h3`
`;

export const LatYLongDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopupPlate = styled.div`
display: flex;
flex-direction: column;
    border: none;
    width: fit-content;
    height: fit-content;
    margin: 20px 20px 20px 20px;
    cursor: pointer;
    font-weight: 800;
    z-index: -2;

    button{
        width: fit-content;
    }
    `;

