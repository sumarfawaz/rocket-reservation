import  React,{useState} from 'react';

import {BsArrowUpRight} from 'react-icons/bs';

import {motion} from 'framer-motion';

import {fadeIn} from '../variants';
import { ThemeProvider } from 'styled-components';

import createCustomTheme from './atoms/createCustomTheme';
import CustomSelect from './atoms/CustomSelect';
import VerticalLine2 from './atoms/VerticalLine2';
import VerticalToggleButtonGroup from './atoms/VerticalToggleButtonGroup';
import ButtonSquared from './atoms/ButtonSquared';
import { useFormik } from 'formik';

const OuterTheme = createCustomTheme();



const Services = () => {

  const [fakeData, setFakeData] = useState(null);


  const generateFakeData = (launchLocation, destinationLocation) => {
    console.log("Fake Data was triggered");
    // Generate random values for fake data
    const launchData = new Date().toLocaleDateString();
    const reachingDate = new Date(
      new Date().getTime() + Math.random() * 30 * 24 * 60 * 60 * 1000
    ).toLocaleDateString();
    const spaceshipNumber = Math.floor(Math.random() * 1000);

    // Set the generated fake data to the state
    setFakeData({
      launchData,
      reachingDate,
      spaceshipNumber,
      launchLocation,         // Add launchLocation to the fake data
      destinationLocation,    // Add destinationLocation to the fake data
    });
  };

  const launchlocation = [
    { value: 'France', label: 'France' },
    { value: 'Germany', label: 'Germany' },
    { value: 'Italy', label: 'Italy' },
    { value: 'Japan', label: 'Japan' },
    { value: 'UnitedKingdom', label: 'United Kingdom' },
    { value: 'UnitedStates', label: 'United States' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Russia', label: 'Russia' },
  ];

  const destinationlocation = [
    { value: 'Mercury', label: 'Mercury' },
    { value: 'Venus', label: 'Venus' },
    { value: 'Earth', label: 'Earth' },
    { value: 'Mars', label: 'Mars' },
    { value: 'Jupiter', label: 'Jupiter' },
    { value: 'Saturn', label: 'Saturn' },
    { value: 'Uranus', label: 'Uranus' },
   
  ];

  const viewOptions = [
    { value: 'oneway',  label: 'One Way' },
    { value: 'twoway', label: 'Two Way' },
    
  ];
  
  const [selectedLaunchLocation, setselectedLaunchLocation] = useState('');
  const [selectedDestinationLocation, setselectedDestinationLocation] = useState('');
  const [view, setView] = useState('list');
 
  
  const handleLaunchLocation = (event) => {
    setselectedLaunchLocation(event.target.value);
  }

  const handleDestinationLocation = (event) => {
    setselectedDestinationLocation(event.target.value);
  }

  const handleViewChange = (nextView) => {
    formik.setFieldValue('triptype', nextView);
  };

  const initialValues = {
    location: '',
    destination: '',
    triptype: '', 
  };

  const onSubmit = values => {
    console.log('Form Data',values)
    generateFakeData(selectedLaunchLocation, selectedDestinationLocation);
    generateFakeData();
  }

  const validate = values => {
    let errors = {}

    if(!values.location){
      errors.location = "Please Select your preferred launch location"
    }

    if(!values.destination){
      errors.destination = "Please Select your destination location"
    }

    if(!values.triptype){
      errors.triptype = "Please Select your trip type"
    }

    return errors
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })

  console.log('Form Data',formik.values);
  
  return (
   <section className='min-h-[100vh] lg:min-h-[78vh] flex mt-5 mb-3 p-5 items-start gap-y-8' id='services'>
    <div className='container mx-auto'>
    <div className='text-center mb-6 lg:text-center'>
          <h4 className='section-yellow-text'>
            <b>Space Faring</b>
          </h4>
          <h5 className='section-subheadings'>
            <b>Get your Space Faring Pass</b>
          </h5>
        </div>

        <div className='justify-center mb-2'>
            <ThemeProvider theme={OuterTheme}>
            <form onSubmit={formik.handleSubmit}>
              <CustomSelect
                placeholder={'Launch Location'}
                label={'Launch Location'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                options={launchlocation}
                name="location"
                value={formik.values.location} 
                error={formik.touched.location && formik.errors.location} // Show error message if touched and there's an error
              />
              {formik.touched.location && formik.errors.location ? (
                  <div className='errors'>{formik.errors.location}</div>
                ) : null}
              <VerticalLine2 />
              <CustomSelect
              placeholder={'Destination Location'}
              label={'Destination'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              options={destinationlocation}
              name="destination"
              value={formik.values.destination}
              error={formik.touched.destination && formik.errors.destination} 
              />
              {formik.touched.destination && formik.errors.destination ? (
                  <div className='errors'>{formik.errors.destination}</div>
                ) : null}
              <div className='spacingbetweencomponents'></div>
              <h5 className='section-subheadings'>
                 <b>Select Trip</b>
              </h5>
              <div className='spacingbetweencomponents'></div>
              <VerticalToggleButtonGroup
               options={viewOptions}
               value={formik.values.triptype}
               exclusive={true}
               name="triptype"
               onChange={handleViewChange}
               onBlur={formik.handleBlur}
               error={formik.touched.triptype && formik.errors.triptype} // Show error message if touched and there's an error
              />
              {formik.touched.triptype && formik.errors.triptype ? (
                  <div className='errors'>{formik.errors.triptype}</div>
                ) : null}
              <div className='spacingbetweencomponents'></div>
              <div className='bottom-4 lg:bottom-8 text-center'>
        {formik.isValid ? (
          <div>
            <ButtonSquared type='submit' text={'NEXT'} />
            {fakeData && (
              <div className='mt-4'>
                
                      <p><span className='balance'>Launch Location</span>: <span className='dollarvalue'>{formik.values.location}</span></p>
                      <p><span className='balance'>Destination Location</span>: <span className='dollarvalue'>{formik.values.destination}</span></p>
                      <p><span className='balance'>Launch Data</span>: <span className='dollarvalue'>{fakeData.launchData}</span></p>
                      <p><span className='balance'>Reaching Date</span>: <span className='dollarvalue'>{fakeData.reachingDate}</span></p>
                      <p><span className='balance'>Spaceship Number</span>: <span className='dollarvalue'>{fakeData.spaceshipNumber}</span></p>
              </div>
            )}
          </div>
        ) : (
          <p className='text-red-600 text-center'>Please fill in all required fields.</p>
        )}
      </div>
            </form>
            </ThemeProvider>
        </div>
    </div>

   </section>
  ); 
};

export default Services;
