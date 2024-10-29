import React from 'react';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@emotion/react';
import createCustomTheme from '../atoms/createCustomTheme';

const LongTextInput = ({ placeholder,value,name,onChange,onBlur}) => (
  <ThemeProvider theme={createCustomTheme}>
    <TextField
        multiline
        rows={3}
        variant="outlined"
        label=""
        focused
        placeholder={placeholder}
        fullWidth
        sx={{
          "& .MuiInputBase-root": {
            color: 'secondary.main',
            borderColor: 'secondary.main',
          },
          width: { sm: 350, md: 350 },
          "& .MuiInputBase-root": {
            height: 80,
            color: 'secondary.main',
            borderColor: 'secondary.main',
          },
        }}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
  </ThemeProvider>
  
);

export default LongTextInput;
