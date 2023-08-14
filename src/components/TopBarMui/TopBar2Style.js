import { styled } from "@mui/material/styles";
import {Stack, Button,Typography } from "@mui/material";

export const MainStack = styled(Stack)`
  background-color: rgb(87,87,87);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5%;

img{
  border-radius: 30px;
  width: 15vw; 
  @media (max-width: 400px) {
    width: 20vw; 
    }
}
`;

export const StyledTypography = styled(Typography)`
 font-size: 13px;
 @media (max-width: 400px) {
  font-size: 8px;
    }
`;

export const StyledTypographyHome = styled(Typography)`
color: white;
 font-size: 13px;
 @media (max-width: 400px) {
  font-size: 8px;
    }
`;

export const CustomizedBox = styled(Stack)`
  background-color: black;
  width: 25vw;
  height: 25vh;
`;

export const LocationButton = styled(Button)`
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


export const StyledButton = styled(Button)`
  background-color: #2e8b57;
  color: black;
  transition: 2s;
  border-radius: 12px;
  @media (min-width: 400px) {
      font-size: 10px;
      padding: 15px;
    }
  :hover {
    background-color: #4fbd7f;
  }
  :focus {
    outline: none;
    border: none;
  }
`;

export const Passmenu = styled(Stack)`
background-color: rgb(87,87,87);
position: absolute;
left: 5%;
color: white;
width: fit-content;
`;

