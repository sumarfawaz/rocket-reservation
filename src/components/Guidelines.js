import React from 'react';
import VerticalLine from '../components/atoms/VerticalLine'
import YellowHeader from './atoms/YellowHeader';
import ButtonSquared from './atoms/ButtonSquared';
import LeoneCharta from './LeoneCharta';
const Guidelines = () => {


  const scrollToGuidelines = () => {
    const guidelinesSection = document.getElementById('leonecharta');
    if (guidelinesSection) {
      guidelinesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <section id='guidelines' className='min-h-[100vh] lg:min-h-[78vh] flex flex-col items-center mt-5 mb-3 p-5 mb-7'>
        <div className='container mx-auto'>
            <h2 className='text-center items-start align-items-center section-headings mb-6 lg:text-center'>
               <b>GUIDELINES</b> 
            </h2>

        {/* Second div with center alignment accross all screens */}
            <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 '>
                <YellowHeader text={'LeoneCharta'}/>
                <VerticalLine/>
            </div>

            <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 '>
                    <YellowHeader text={'SpaceFaring'}/>
                    <VerticalLine/>
            </div>

            <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 '>
                    <YellowHeader text={'Pay'}/>
                     <VerticalLine/>
            </div>

            <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 '>
                <YellowHeader text={'Galectic Boarding Pass'}/>
            </div>
              
            <div className='bottom-4 lg:bottom-8 '>
                <ButtonSquared onClick={scrollToGuidelines} text={'NEXT'}/>
            </div>

        </div>
      </section>
    </>
  );
}

export default Guidelines;
