import React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio, ThemeProvider } from '@mui/material';
import createCustomTheme from '../atoms/createCustomTheme';
import { useFormikContext } from 'formik'; // Import useFormikContext

const RadioButtons = ({name,value,onChange,onBlur}) => {
  
  
  return(
<ThemeProvider theme={createCustomTheme}>
<FormControl>
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name={name}
      value={value} // Set the selected value from Formik
      onChange={onChange}
      onBlur={onBlur}
    >
      <FormControlLabel
        sx={{
          '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)': {
            color: '#b936ee',
          },
          '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
            color: 'primary',
          },
        }}
        value="Male"
        control={<Radio />}
        label="Male"
      />
      <FormControlLabel
        sx={{
          '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)': {
            color: '#b936ee',
          },
          '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
            color: 'primary',
          },
        }}
        value="Female"
        control={<Radio />}
        label="Female"
      />
      <FormControlLabel
        sx={{
          '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)': {
            color: '#b936ee',
          },
          '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
            color: 'primary',
          },
        }}
        value="other"
        control={<Radio />}
        label="Other"
      />
    </RadioGroup>
  </FormControl>
  </ThemeProvider>
  );
  
  
}

export default RadioButtons;
