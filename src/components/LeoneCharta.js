import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import Paper from '@mui/material/Paper'; // Import Paper component
import { dark } from '@clerk/themes';
import { useNow } from '@mui/x-date-pickers/internals';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import ButtonSquared from './atoms/ButtonSquared';
import createCustomTheme from './atoms/createCustomTheme';
import TextInput from './atoms/TextInput';
import DatePicker from './atoms/DatePicker';
import RadioButtons from './atoms/RadioButtons';
import PersonalInformationForm from './molecules/PersonalInformationForm';
import LongTextInput from './atoms/LongTextInput';
import MedicalForm from './molecules/MedicalForm';
import CustomSelect from '../components/atoms/CustomSelect'; // Adjust the import path
import PhysicalAttributesForm from './molecules/PhysicalAttributesForm';
import { UserProfile, useUser } from "@clerk/clerk-react";
import PersonalInfoService from './services/PersonalInfoService';
const theme = createCustomTheme();


const LeoneCharta = () => {

  const { isLoaded: userLoaded, isSignedIn, user, email } = useUser();
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null);

  const fetchLeoneChartaData = () => {
    const email = user.primaryEmailAddress.emailAddress;
    PersonalInfoService.getLeoneChartaDataByEmail(email)
      .then(response => {
        if (response.status === 200) {
          setFetchedData(response.data);
          setError(null);
          console.log(response.data);
        }
      })
      .catch(error => {
        console.log(error);
        setError('Error fetching data.');
      });
  
    };

    useEffect(() => {
      fetchLeoneChartaData();
    }, []);


  return (

    <>
      <section id='leonecharta'> 
      <PersonalInformationForm/>
      </section>
      
      <section id='medical'>
        <MedicalForm fetchedData={fetchedData}/>
      </section>

      <section>
        <PhysicalAttributesForm fetchedData={fetchedData}/>
      </section>
    </>
   
  )
}
export default LeoneCharta;