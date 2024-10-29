import React from 'react';
import { useAuth, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import '../App.css'
import Logo from '../assets/Sign-inLogo.png';

const Decision = () => {
  const { isLoaded: authLoaded, userId, sessionId } = useAuth();
  const { isLoaded: userLoaded, isSignedIn, user } = useUser();

  return (
    <div className='sign-in-body'>
      <div className='sign-in-button'>
      
        <a href='/sign-in' className='center-content'>
          <img src={Logo} alt='Logo' className='centered-logo' />
          <button className='btn btn-sm'>Sign-in</button>
        </a>
      </div>
      {/*<div className='teamSignaturetext'>

          <h3>Web Wizards&#174;</h3>

         </div>*/}
    </div>
  );
};

export default Decision;