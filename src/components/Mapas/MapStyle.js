import styled from "styled-components";

export const MapDiv = styled.div`
  position: relative;
  flex-direction: column;
  z-index: 0 !important;
  background: linear-gradient(45deg,  rgba(231,231,231,1),  rgba(189,189,189,1));

  .Modal {
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    background-color: transparent;
    box-shadow: rgba(189,189,189,1);
  }
  button {
    width: fit-content;
  }
  .leaflet-popup-content-wrapper {
background-color: rgba(231,231,231,0.9)}
`;

export const MapcontainerDiv = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
`;

export const TituloMarker = styled.h3``;

export const LatYLongDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopupPlateDiv = styled.div`
  place-self: center;
  display: flex;
  flex-direction: column;
  border: none;
  width: fit-content;
  height: fit-content;
  margin: 20px 20px 20px 20px;
  cursor: pointer;
  font-weight: 800;
  z-index: -2;
  .popupTitle {
    font-size: 20px;
  }
  .botones {
    display: flex;
    justify-content: space-around;
  }
  button {
    width: fit-content;
  }
  img {
    border-radius: 10px;
  }
`;
