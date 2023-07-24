import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { FormGroup, Switch, Card,Paper } from "@mui/material";

export const CustomizedButton = styled(Button)`
  background-color: #2e8b57;
  color: black;
  transition: 2s;
  border-radius: 25px;

  :hover {
    background-color: green;
  }
  :focus {
    outline: none;
    border: none;
  }
`;
export const StyledPaper = styled(Paper)`
border-radius: 25px;
width: 25vw;
height: 25vh;
margin: 10px auto 10px auto;
`;
export const StyledCard = styled(Card)`
border-radius: 25px;
background-color: pink;
width: 25vw;
height: 25vh;
`;

export const CustomizedBox = styled(Box)`
margin: auto;
  border-radius: 25px;
background-color: pink;
width: 25vw;
height: 25vh;
transition: 1s;
:hover{
  margin: auto;
  padding: 2%;
  border-radius: 25px;
}
`;

export const CustomizedFab = styled(Fab)`
  position: relative;
  display: flex;
  margin: auto;
  background-color: #f44336;
  margin-top: 20px;
  transition: 2s;
  :hover {
    color: white;
    background-color: #42a5f5;
  }
  :focus {
    outline: none;
  }
`;

export const CustomizedFormGroup = styled(FormGroup)`
  background-color: rgba(111, 111, 111);
  height: fit-content;
  width: fit-content;
  margin: auto;
  margin-top: 20px;
  transition: 2s;
  padding: 2%;
  border-radius: 25px;
`;

export const CustomizedSwitch = styled(Switch)`
  color: #66bb6a;
  background-color: rgba(150, 150, 150);
  border-radius: 25px;
  transition: 2s;

  .MuiSwitch-switchBase{
    transition: 1s;
    color: black;
    /* background-color: aliceblue; */
    border-radius: 25px;
    }
    .MuiSwitch-track{
       background-color: black;
    }
    .Mui-checked{
        color: red;
    }
    .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track{
        background-color: red;
    }
`;
