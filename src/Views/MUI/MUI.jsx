import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { CustomizedBox, CustomizedButton, CustomizedFab, CustomizedFormGroup, CustomizedSwitch, StyledCard } from './MUIstyle';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
//* //////////////////////////////////////////

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';



const Mui = () => {

    return (
        <Stack>
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



<CustomizedFormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      <FormControlLabel required control={<CustomizedSwitch />} label="Required" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </CustomizedFormGroup>

      <StyledCard />
      </Stack>
    );
  };
  
  export default Mui;