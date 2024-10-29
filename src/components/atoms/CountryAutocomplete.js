import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';

const CountryAutocomplete = ({ formik }) => {
  const [options, setOptions] = useState([]);

  const fetchCountryData = async (searchText) => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/all?fields=name,flags`);
      const data = await response.json();
      const filteredData = data.filter((country) =>
        country.name.common.toString().includes(searchText.toLowerCase())
      );
      return filteredData;
    } catch (error) {
      console.error('Error fetching country data:', error);
      return [];
    }
  };

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.name.common}
      renderInput={(params) => <TextField {...params} 
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
      variant='outlined'
      focused
      placeholder='Please Enter your Nationality'
      />}
      onChange={(event, newValue) => {
        formik.setFieldValue('nationality', newValue ? newValue.name.common : '');
      }}
      onInputChange={async (event, newInputValue) => {
        if (newInputValue) {
          const data = await fetchCountryData(newInputValue);
          setOptions(data);
        } else {
          setOptions([]);
        }
      }}
    />
  );
};

export default CountryAutocomplete;
