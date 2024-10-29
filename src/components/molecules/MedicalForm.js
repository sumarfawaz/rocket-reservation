import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import createCustomTheme from '../atoms/createCustomTheme'; // Adjust the import path

import LongTextInput from '../atoms/LongTextInput';
import TextInput from '../atoms/TextInput';
import ButtonSquared from '../atoms/ButtonSquared';
import { useFormik } from 'formik';

const OuterTheme = createCustomTheme();

const MedicalForm = ({ fetchedData }) => {

  const digitalCharacter = fetchedData.length > 0 ? fetchedData[0].digitalCharacter : '';

  /*{digitalCharacter && (
    //console.log({digitalCharacter})
  )};*/

const initialValues = {
  
  preconditons:'',
  allergies:'',
  currentmedications:'',
  emergencycontact:''
}

const onSubmit = values => {
  console.log('Form Data',values);
}

const validate = values => {
  let errors = {}

  if(!values.preconditons){
    errors.preconditons = "Please Enter 'Nothing' if you're all good"
  }

  if(!values.allergies){
    errors.allergies = "Please Enter 'Nothing' if you're all good"
  }

  if(!values.currentmedications){
    errors.currentmedications = "Please Enter 'Nothing' if you're not under medication"
  }

  if(!values.emergencycontact){
    errors.emergencycontact = "Please Enter an emergency contact number"
  }

  return errors
}

const formik = useFormik({
  initialValues,
  onSubmit,
  validate
})

//console.log('Form Data',formik.values)
  return (
    <div className='min-h-[100vh] lg:min-h-[78vh] flex mt-5 mb-3 p-5 items-start gap-y-8' id='leonechartamedical'>
      <div className='container mx-auto'>
        <div className='text-center mb-6 lg:text-center'>
          <h5 className='section-subheadings'>
            <b>YOUR MEDICAL CONDITIONS CREATE AN IMPACT DURING THE SPACE FARING</b>
          </h5>
        </div>

        <div className='justify-center gap-y-5 mb-2'>
          <ThemeProvider theme={OuterTheme}>
            {
              <form onSubmit={formik.handleSubmit}>
              <LongTextInput name={'preconditons'} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.preconditons} placeholder={'Any Pre-existing Medical Conditions'} />
              {formik.touched.preconditons && formik.errors.preconditons ? (
                  <div className='errors'>{formik.errors.preconditons}</div>
                ) : null}
              <div className='spacingbetweencomponents'></div>
              <LongTextInput name={'allergies'} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.allergies}  placeholder={'Allergies'} />
              {formik.touched.allergies && formik.errors.allergies ? (
                  <div className='errors'>{formik.errors.allergies}</div>
                ) : null}
              <div className='spacingbetweencomponents'></div>
              <LongTextInput name={'currentmedications'} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.currentmedications}  placeholder={'Current Medications'} />
              {formik.touched.currentmedications && formik.errors.currentmedications ? (
                  <div className='errors'>{formik.errors.currentmedications}</div>
                ) : null}
             <div className='spacingbetweencomponents'></div>
              <TextInput name={'emergencycontact'} onBlur={formik.handleBlur} onChange={formik.handleChange} values={formik.values.emergencycontact} placeholder={'Emergency Contact Number'} />
              {formik.touched.emergencycontact && formik.errors.emergencycontact ? (
                  <div className='errors'>{formik.errors.emergencycontact}</div>
                ) : null}
              <div className='spacingbetweencomponents'></div>
              <div className='bottom-4 lg:bottom-8 text-center'>
              {formik.isValid ? (
                    <ButtonSquared type='submit' text={'NEXT'} />
                  ) : (
                    <p className='text-red-600 text-center'>Please fill in all required fields.</p>
                  )}
              </div>
            </form>
            }
            
          </ThemeProvider>
          
        </div>
      </div>
    </div>
  );
};

export default MedicalForm;
