import TextField from '@mui/material/TextField';
import { styled, Button, Typography,Stack } from "@mui/material";


export const FormStack = styled(Stack)`
 display: flex;
 flex-direction: row;
`;
export const FormText = styled(TextField)`
margin: 25px auto auto 25px;
background-color: rgb(237, 234, 229);
  transition: 2s;
  border-radius: 25px;
  width: 75%;
`;

export const FormTitle = styled(Typography)`
`;

export const FormBtn = styled(Button)`
background-color: #2e8b57;
  color: rgba(225,225,225);
  transition: 2s;
  border-radius: 25px;

  margin: auto 5% auto auto; 
  height: fit-content;
  width: 15%;

  :hover {
    background-color: #4fbd7f;
  }
  :focus {
    outline: none;
    border: none;
  }
`;