import React from 'react';

import {BiHomeAlt, BiUser,BiLock} from 'react-icons/bi';
import {BsclipboardData, BsBriefcase, BsChatSquare, BsClipboard, BsChatSquareText} from 'react-icons/bs'
import { Link } from 'react-scroll';
import { AiOutlineLock } from 'react-icons/ai'; // Import the padlock icon
import { FaBook,FaUserLock,FaRocket,FaBitcoin,FaPassport } from 'react-icons/fa';



const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between  text-2x1 text-white/50 items-center'>
          <Link activeClass='active' smooth={true} spy={true} offset={-200} to='home' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              
              <BiHomeAlt/>
          </Link>
          <Link activeClass='active' smooth={true} spy={true} to='guidelines' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <FaBook/>
          </Link>
          <Link activeClass='active' smooth={true} spy={true} to='leonecharta' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <FaUserLock/>
          </Link>
          <Link activeClass='active' smooth={true} spy={true} to='services' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <FaRocket/>
          </Link>
          {/*<Link activeClass='active' smooth={true} spy={true} to='payment' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <FaBitcoin/>
          </Link>
          <Link activeClass='active' smooth={true} spy={true} to='contact' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <FaPassport/>
          </Link>*/}
        </div>
      </div>
    </nav>
  )
};

export default Nav;
