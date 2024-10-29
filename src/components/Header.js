import React from "react";
import { useUser, UserButton } from "@clerk/clerk-react";
import Logo from "./atoms/Logo";
import ButtonRounded from './atoms/ButtonRounded'
const Header = () => {
  const { isLoaded: userLoaded, isSignedIn, user } = useUser(); // Use the useUser hook

  return (
    <header className='py-7'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
           {/* Render UserButton when user is signed in */}
          <a href='#'>
            <Logo/>
          </a>
          {isSignedIn ? <ButtonRounded text={<UserButton/>}/>  : <ButtonRounded text={'Services'}/> }
        </div>
      </div>
    </header>
  );
};

export default Header;