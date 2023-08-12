import { styled } from "@mui/material/styles";
import { Stack, Button, Typography, TextField } from "@mui/material";


export const IconsGrid = styled(Stack)`
display: flex;
flex-direction: row;
`;

export const FormTitle = styled(Typography)`
`;
export const LabelTitle = styled(Typography)`
color: black;
`;
export const Label2Title = styled(Typography)`
`;


export const Background = styled(Stack)`
  display: grid;
  place-content: center;

.fotosBtns{
  margin: 1% auto;
}

  .form {
    background-color: transparent;
    border: none;
    border-radius: 30px;
    padding: 50px;
    margin-top: 0rem;
    color: aliceblue;
    font-weight: 500;
    font-size: large;
    @media (max-width: 650px) {
    font-size: 10px;
    padding: 15px;
  }
  }

  h4 {
    font-size: 34px;
    font-weight: 900;
    color: black;
    margin-top: 0;
  }
`;

export const ButtonsDiv = styled(Stack)`
  background-color: rgba(89, 89, 89);
  border: none;
  border-radius: 10px;
  width: fit-content;
  height: fit-content;
  padding: 10px;
  margin: 10px auto 0px 0;
  font-weight: 800;
  transition: 1s;

  :hover {
    background-color: rgba(150, 150, 150);
  }
`;

export const Clean = styled(Stack)`
  cursor: pointer;
  background-color: rgb(35, 35, 35);
  border: none;
  border-radius: 10px;
  width: fit-content;
  height: fit-content;
  padding: 10px;
  margin: 0 auto;
  font-weight: 800;
  transition: 1s;

  :hover {
    background-color: rgb(50, 50, 50);
  }
`;

export const StyledButton = styled(Button)`
  background-color: #2e8b57;
  color: white;
  transition: 2s;
  border-radius: 25px;
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

export const CloseBtn = styled(Button)`
  background-color: #2e8b57;
  color: white;
  transition: 2s;
  border-radius: 25px;
  width: 50%;
  margin: 0 auto 2% auto;
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


export const StyledTextField = styled(TextField)`
  background-color: grey;
  transition: 2s;
  border-radius: 25px;
  .InputProps {
    color: white;
  }
`;

export const StyledInputFile = styled(TextField)`
  background-color: grey;
  transition: 2s;
  border-radius: 25px;
  color: black;
  .InputProps {
    color: white;
  }
`;
