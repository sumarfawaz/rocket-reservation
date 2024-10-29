import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import { ThemeProvider } from '@emotion/react';
import createCustomTheme from '../atoms/createCustomTheme';
import { TextField } from '@mui/material';
const DatePicker = ({ label,value,name,onChange,format }) => {
  return (
    <div className='datepicker-custom-div'>
      <ThemeProvider theme={createCustomTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
      label={label}
      fullWidth
      value={value}
      className={name}
      onChange={onChange}
      format='MM/DD/YYYY'
      
      />
      </LocalizationProvider>
      </ThemeProvider>
      
    </div>
  );
};

export default DatePicker;
