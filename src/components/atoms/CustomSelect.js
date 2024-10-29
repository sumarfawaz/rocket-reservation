import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const CustomSelect = ({ label, value, onChange, options,placeholder,name,defaultValue }) => {
  return (
    <FormControl fullWidth>
      <InputLabel
        id='demo-simple-select-label'
        sx={{
          color: '#3bace2', // Change placeholder color
          paddingTop: '8px', // Adjust padding to create separation from border
        }}
        
      >
        {label}
      </InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={value}
        onChange={onChange}
        sx={{
          border: '1px solid #b936ee',
          color: '#3bace2', // Change text color
        }}
        placeholder={placeholder}
        name={name}
        label={label}
        defaultValue={defaultValue}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
