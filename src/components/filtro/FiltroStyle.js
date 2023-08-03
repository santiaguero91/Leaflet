import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1000 !important;

  top: 0;
  left: 0;

  background-color: white;
  width: 40%;
  margin: 0 auto;
  padding-bottom: 4%;

  .special {
    display: flex;
    flex-direction: column;
    background-color: rgba(99, 99, 99);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    padding: 2px;
    margin: 4px;
  }
`;

export const ButtonFilter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  margin: 0 auto;
  padding: 1%;
  width: 80%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  cursor: pointer;
`;
