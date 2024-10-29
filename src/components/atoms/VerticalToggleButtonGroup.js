import React from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

const VerticalToggleButtonGroup = ({ options, value, exclusive, onChange,name,onBlur }) => {
  const handleOptionChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      value={value}
      exclusive={exclusive}
      onChange={handleOptionChange}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Align buttons to the left
        border: '2px solid #b936ee', // Border color
        borderRadius: '8px', // Rounded corners
        padding: '10px', // Add padding
      }}
    >
      {options.map((option) => (
        <ToggleButton name={name} onBlur={onBlur} key={option.value} value={option.value} aria-label={option.label }
        sx={{
          color: '#3bace2', // Font color
          justifyContent: 'flex-start', // Align text to the left
          width: '100%', // Full width
          padding: '20px',
         
          '&.Mui-selected': {
            justifyContent: 'flex-start', // Align text to the left
            width:'100%',
            color: '#b936ee',
            borderColor: '#3bace2', // Border color when selected
            padding: '20px',
            borderWidth: '1px', // Border width
            borderStyle: 'solid', // Border style
            borderColor: '#3bace2', // Border color
          },
        }}
        >
          {option.value}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default VerticalToggleButtonGroup;
