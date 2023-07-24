import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  CustomizedBox,
  CustomizedButton,
  CustomizedFab,
  CustomizedFormGroup,
  CustomizedSwitch,
  StyledCard,
  StyledPaper,
} from "./MUIstyle";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
//* //////////////////////////////////////////

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Box, Paper, Typography } from "@mui/material";
import { CustomBox, CustomizedDiv } from "./Animations";

const Mui = () => {
  return (
    <Stack>
      <CustomizedDiv>
{/*         <CustomBox className="heartbeat">
          <Typography className="breathing_animation" >HOLA</Typography>
        </CustomBox> */}

        <CustomBox className="tracking_in_contract">
          <Typography className="tracking_in_contract" >HOLA Que tal </Typography>
          <Typography className="focus_in_expand_fwd" >HOLA Que tal </Typography>
        </CustomBox>
      </CustomizedDiv>

      {/*
        <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <CustomizedButton variant="contained">Contained</CustomizedButton>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
<CustomizedBox>
<CustomizedFab color='primary' aria-label="add">
        <AddIcon />
      </CustomizedFab>
</CustomizedBox>



<CustomizedFormGroup  >
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      <FormControlLabel required control={<CustomizedSwitch />} label="Required" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </CustomizedFormGroup>

      <StyledCard elevation={14}/>
      <StyledPaper elevation={14}><Typography>Hola</Typography></StyledPaper>

       */}
    </Stack>
  );
};

export default Mui;
