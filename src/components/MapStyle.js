import styled from "styled-components";

export const MapDiv = styled.div`
  position: relative;
  width: 95vw;
  flex-direction: column;
  z-index: 1500 !important;
  button {
    width: fit-content;
  }
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
  .popupTitle{
    font-size: 20px;
  }
  .botones {
    display: flex;
    justify-content: space-around;
  }
  button {
    width: fit-content;
  }
  img{
    border-radius: 10px;
  }
`;
