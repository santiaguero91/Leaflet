import { styled } from "@mui/material/styles";
import {Stack, Button,Typography } from "@mui/material";

export const MainDiv = styled(Stack)`
display: flex;
flex-direction: column;
width: 70vw;
height: fit-content;
padding-bottom: 2%;
place-self: center;
border-radius: 5px;
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
export const DeTiltle = styled(Typography)`
margin: 0 auto;
`;


export const ImgTxtDiv = styled(Stack)`
flex-direction: row;
margin: 1%;
`;

export const DeTxt = styled(Typography)`
margin: 2% 2%;
`;
export const BackBtn = styled(Button)`
background-color: #2e8b57;
  color: rgba(225,225,225);
  transition: 2s;
  border-radius: 25px;

  :hover {
    background-color: #4fbd7f;
  }
  :focus {
    outline: none;
    border: none;
  }
`;

export const AddTxtBtn = styled(Button)`
background-color: #2e8b57;
  color: rgba(225,225,225);
  transition: 2s;
  border-radius: 25px;

  :hover {
    background-color: #4fbd7f;
  }
  :focus {
    outline: none;
    border: none;
  }
`;

