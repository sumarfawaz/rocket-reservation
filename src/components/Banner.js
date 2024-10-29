import React from 'react';

import Image from '../assets/avatar.svg';

import {FaGithub, FaYoutube, FaDribble} from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation';

import {motion} from 'framer-motion';

import {fadeIn} from '../variants'

import { useUser } from "@clerk/clerk-react";
import ButtonRounded from './atoms/ButtonRounded';

const Banner = () => {
  const { isLoaded: userLoaded, isSignedIn, user } = useUser();

  const scrollToGuidelines = () => {
    const guidelinesSection = document.getElementById('guidelines');
    if (guidelinesSection) {
      guidelinesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
      
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 '>
        <motion.h3
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='text-[30px] font-bold leading-[0.8] lg:text-[110px] capitalize text-center h1-head text-gradient '>
            <b>SPIRALZ</b>
          </motion.h3>
          <div className='flex-1 text-center font-secondary lg:text-left'>
           <motion.h2 variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='text-[30px] font-bold leading-[0.8] lg:text-[110px] capitalize text-center h4-head text-gradient'>
          <b>Welcome {user.firstName}!</b> 
            </motion.h2> 
            <br/>
            <motion.div 
            variants={fadeIn('up',0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}}
            className='mb-6 text-[28px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] animated-text'>
              <span className='text-white mr-4'>We are</span>
              <TypeAnimation sequence={[
                'Multiplanetory',
                2000,
                'Beyond',
                2000,
                'Boundless',
                2000
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
              
            </motion.div>
            <motion.p
            variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}}
            className='mb-8 max-w-lg mx-auto lg:mx-0 '>
              </motion.p>
              <motion.div 
              variants={fadeIn('up',0.6)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                <ButtonRounded onClick={scrollToGuidelines} text={'Get Started'}/>
                
              </motion.div>
              {/*<div className='flex'>
                <a href='#'>
                  <FaYoutube/>
                </a>
                <a href='#'>
                  <FaGithub/>
                </a>
                <a href='#'>
                  <FaDribble/>
                </a>
            </div>*/}
          </div>

        
        </div>
      </div>
    </section>
  )
};

export default Banner;
