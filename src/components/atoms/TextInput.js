import React from 'react';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@emotion/react';
import createCustomTheme from '../atoms/createCustomTheme';
const TextInput = ({ label, placeholder,name,value,onChange,mode,onBlur }) => {
  return (
    <ThemeProvider theme={createCustomTheme}>
      {
        <TextField
        sx={{
          "& .MuiInputBase-root": {
            color: 'secondary.main',
            borderColor: 'secondary.main',
            "&.Mui-disabled": {
              color: '#b936ee',        // Change text color for disabled state
              borderColor: '#b936ee', // Change border color for disabled state
              backgroundColor: 'rgba(59, 172, 226,0.5)'
            }
          }
        }}
        label={label}
        variant="outlined"
        placeholder={placeholder}
        focused
        autoComplete='off'
        fullWidth
        name={name}
        value={value}
        onChange={onChange}
        disabled={mode}
        onBlur={onBlur}
      />
      
      }
     
    </ThemeProvider>
    
  );
};

export default TextInput;
