import React, { useState } from 'react';
import CustomSelect from '../atoms/CustomSelect'; // Update the import path
import ButtonSquared from '../atoms/ButtonSquared'; // Update the import path
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider from MUI
import createCustomTheme from '../atoms/createCustomTheme'; // Import your theme
import { useFormik } from 'formik';

const OuterTheme = createCustomTheme();

const PhysicalAttributesForm = ({fetchedData}) => {

  const digitalCharacter = fetchedData.length > 0 ? fetchedData[0].digitalCharacter : '';

  /*{digitalCharacter && (
    console.log({digitalCharacter})
  )}*/


        const heightOptions = [
          { value: '1ft', label: '1 ft' },
          { value: '2ft', label: '2 ft' },
          { value: '3ft', label: '3 ft' },
          { value: '4ft', label: '4 ft' },
          { value: '5ft', label: '5 ft' },
          { value: '6ft', label: '6 ft' },
          { value: '7ft', label: '7 ft' },
        ];


        const weightOptions = [
          { value: '1-50kg', label: '1 - 50 kg' },
          { value: '51-70kg', label: '51 - 70 kg' },
          { value: '71-90kg', label: '71 - 90 kg' },
          { value: '91-120kg', label: '91 - 120 kg' },
        ];
        
        
        const fitnessOptions = [
          { value: 'weak', label: 'Weak' },
          { value: 'good', label: 'Good' },
          { value: 'excellent', label: 'Excellent' },
        ];
        
       

      const [selectedHeight, setSelectedHeight] = useState(0);
      const [selectedWeight, setSelectedWeight] = useState(0);
      const [selectedFitness, setSelectedFitness] = useState(0);

      const handleFitnessChange = (event) => {
        setSelectedFitness(event.target.value);
      }

      const handleHeightChange = (event) => {
        setSelectedHeight(event.target.value);
      };

      const handleWeightChange = (event) => {
        setSelectedWeight(event.target.value);
      };

      const initialValues = {
        height:'',
        weight:'',
        fitnesslevel:''
      }

      const onSubmit = values => {
        console.log('Form Data',values)
      }

      const validate = values => {
        let errors = {}

        if(!values.height){
          errors.height = "Please Select your Height"
        }

        if(!values.weight){
          errors.weight = "Please Select your Weight Range"
        }

        if(!values.fitnesslevel){
          errors.fitnesslevel = "Please Select your Fitness Level"
          
        }

        return errors
      }

      const formik = useFormik({
        initialValues,
        onSubmit,
        validate
      })

      //console.log('Form Data',formik.values);

      return(
        <section className='min-h-[100vh] lg:min-h-[78vh] flex mt-5 mb-3 p-5 items-start gap-y-8' id='leonechartaphysicalattributes'>
      <div className='container mx-auto'>
        <div className='text-center mb-6 lg:text-center'>
          <h5 className='section-subheadings'>
            <b>WE NEED YOUR PHYSICAL ATTRIBUTES AND FITNESS LEVEL, PLEASE MAKE SURE THAT YOUR PHYSICAL ATTRIBUTES ARE PERFECT FOR THE SPACESUIT</b>
          </h5>
        </div>

        <div className='justify-center mb-2'>
          <ThemeProvider theme={OuterTheme}>
            {
              <form onSubmit={formik.handleSubmit}>
              <CustomSelect
                label={'Height (ft)'}
                placeholder={'Height'}
                name="height" // Specify the field name
                value={formik.values.height}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                options={heightOptions}
                error={formik.touched.height && formik.errors.height} // Show error message if touched and there's an error
              />
              {formik.touched.height && formik.errors.height ? (
                  <div className='errors'>{formik.errors.height}</div>
                ) : null}
              <br/>
              <br/>
              <CustomSelect
                label={'Weight (kg)'}
                placeholder={'Weight'}
                name="weight" // Specify the field name
                value={formik.values.weight}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                options={weightOptions}
                error={formik.touched.weight && formik.errors.weight} // Show error message if touched and there's an error
              />
              {formik.touched.weight && formik.errors.weight ? (
                  <div className='errors'>{formik.errors.weight}</div>
                ) : null}
              <br/>
              <br/>
              <CustomSelect
               label={'Fitness Level'}
               placeholder={'Fitness Level'}
               name="fitnesslevel" // Specify the field name
               value={formik.values.fitnesslevel}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               options={fitnessOptions}
               error={formik.touched.fitnesslevel && formik.errors.fitnesslevel} // Show error message if touched and there's an error
              />
              { formik.errors.fitnesslevel ? (
                  <div className='errors'>{formik.errors.fitnesslevel}</div>
                ) : null}
              <br/>
              <br/>
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
    </section>
    );
      
};

export default PhysicalAttributesForm;