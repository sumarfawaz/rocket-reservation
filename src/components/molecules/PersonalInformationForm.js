import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import createCustomTheme from '../atoms/createCustomTheme'; // Adjust the import path

import TextInput from '../atoms/TextInput';
import DatePicker from '../atoms/DatePicker';
import RadioButtons from '../atoms/RadioButtons';
import ButtonSquared from '../atoms/ButtonSquared';
import { useFormik } from 'formik';
import { UserProfile, useUser } from "@clerk/clerk-react";
import { useAuth } from '@clerk/clerk-react';
import dayjs from 'dayjs'; // Import the Day.js library
import PersonalInfoService from '../services/PersonalInfoService';

const OuterTheme = createCustomTheme();

const PersonalInformationForm = () => {

  const { isLoaded: userLoaded, isSignedIn, user, email } = useUser();
  const { isLoaded: authLoaded, userId, sessionId } = useAuth();

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
      if (isSignedIn && userLoaded) {
        fetchLeoneChartaData();
      }
    }, [isSignedIn, userLoaded]);

    

  const initialValues = {
    date: null,
    email: user.primaryEmailAddress.emailAddress,
    fullname: user.firstName.toString().toUpperCase() + ' ' + user.lastName.toString().toUpperCase(),
    nationality: '',
    gender: ''
  }

  const onSubmit = values => {
    console.log('Form Data', values);
    PersonalInfoService.saveLeoneCharta(values)
      .then((response) => {
        if (response.status === 200) {
          fetchLeoneChartaData();
          const medicalSection = document.getElementById("medical");
          if (medicalSection) {
            medicalSection.scrollIntoView({ behavior: "smooth" });
          }
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }

  const validate = values => {
    let errors = {}

    if (!values.gender) {
      errors.gender = "Select your gender"
      console.log("Gender is not set");
    }
    if (!values.date) {
      errors.date = "Oops! Pick your birthday to continue"
      console.log("Date not set");
    }
    if (!values.nationality) {
      errors.nationality = "Enter your Nationality to continue"
      console.log("Nationality not entered");
    }

    return errors
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })

  return (
    <section className='min-h-[100vh] lg:min-h-[78vh] flex mt-5 mb-3 p-5 items-start gap-y-8'>
      <div className='container mx-auto'>
        <div className='text-center mb-6 lg:text-center'>
          <h4 className='section-yellow-text'>
            <b>LeoneCharta</b>
          </h4>
          <h5 className='section-subheadings'>
            <b>This is your personal information</b>
          </h5>
        </div>
        <div className='justify-center mb-2'>
          <ThemeProvider theme={OuterTheme}>
            {fetchedData.length > 0 ? (
              // Display fetched data
              <div>
                {fetchedData.map((dataItem, index) => (
                  <div key={index}  className="mt-4 p-3 gap-y-8 border rounded text-left">
                   <p><span className='front-text'>Digital Character</span> : <span className='rear-text text-right'>{dataItem.id}</span></p>
                   <p><span className='front-text'>Full Name </span>        : <span className='rear-text'>{dataItem.fullname}</span></p>
                   <p><span className='front-text'>Gender</span>            : <span className='rear-text'>{dataItem.gender}</span></p>
                   <p><span className='front-text'>Date of Birth</span>     : <span className='rear-text'>{dataItem.date}</span></p>
                   <p><span className='front-text'>Email</span>             : <span className='rear-text'>{dataItem.email}</span></p>
                   <p><span className='front-text'>Nationality</span>       : <span className='rear-text'>{dataItem.nationality}</span></p>
                  </div>
                ))}
              </div>
            ) : (
              // Display form
              <form onSubmit={formik.handleSubmit}>
                <TextInput name={'fullname'} placeholder={'Full Name'} onChange={formik.handleChange} value={formik.values.fullname} mode={true} onBlur={formik.handleBlur} />
                <br />
                <br />
                <DatePicker
                  label={'Date Of Birth'}
                  onChange={(date) => {
                    const formattedDate = dayjs(date).format('MM/DD/YYYY');
                    formik.setFieldValue('date', formattedDate);
                  }}
                  value={formik.values.date}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.date && formik.errors.date ? (
                  <div className='errors'>{formik.errors.date}</div>
                ) : null}
                <div className='flex flex-row text-blue-400 justify-stretch radio-group'>
                  <RadioButtons
                    name={'gender'}
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.gender && formik.errors.gender ? (
                  <div className='errors'>{formik.errors.gender}</div>
                ) : null}
                <br />
                <TextInput name={'email'} placeholder={'Email'} onChange={formik.handleChange} value={formik.values.email} mode={true} />
                <br />
                <br />
                <TextInput name={'nationality'} placeholder={'Nationality'} onChange={formik.handleChange} value={formik.values.nationality} onBlur={formik.handleBlur} />
                {formik.touched.nationality && formik.errors.nationality ? (
                  <div className='errors'>{formik.errors.nationality}</div>
                ) : null}
                <div className='bottom-4 lg:bottom-8 text-center'>
                  {formik.isValid ? (
                    <ButtonSquared type='submit' text={'NEXT'} />
                  ) : (
                    <p className='text-red-600 text-center'>Please fill in all required fields.</p>
                  )}
                </div>
              </form>
            )}
          </ThemeProvider>
        </div>
      </div>
    </section>
  );
};

export default PersonalInformationForm;
