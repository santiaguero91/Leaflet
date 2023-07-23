import { styled } from "@mui/material/styles";
import {Stack, Button,Typography } from "@mui/material";

export const MainStack = styled(Stack)`
  background-color: rgb(87,87,87);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5%;
`;

export const StyledTypography = styled(Typography)`
`;

export const CustomizedBox = styled(Stack)`
  background-color: black;
  width: 25vw;
  height: 25vh;
`;

export const LocationButton = styled(Button)`
  background-color: #2e8b57;
  color: black;
  transition: 2s;
  border-radius: 25px;

  :hover {
    background-color: #3e9e68;
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
  border-radius: 25px;

  :hover {
    background-color: #3e9e68;
  }
  :focus {
    outline: none;
    border: none;
  }
`;