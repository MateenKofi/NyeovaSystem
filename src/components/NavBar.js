import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../_next/logo.webp&w=64&q=75'
import '../components/css/navbar.css'; 
import { Link } from 'react-router-dom';

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  // Toggle menu function
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className='w-full  bg-white/80  z-50 lg:fixed md:fixed sm:fixed '>
      <nav>
        <div className='max-w-7xl mx-auto'>
          <div className='flex mx-auto justify-between w-5/6'>
            {/* Primary menu and logo */}
            <div className='logo'>
              {/* Logo */}
              <a href='/' className='font-bold text-gray-700'>
              <img src={logo} alt='' className='h-20'/>
              </a>
            </div>
            {/* Mobile navigation toggle */}
            <div className='flex gap-4 items-center'>
              <Link to={'/contact'}>
              <button className='px-4 py-2 rounded-lg bg-black text-white hover:bg-white hover:shadow-xl hover:text-black transition-all duration-300 ease-in-out'>Let's Talk</button>
              </Link>
              <button onClick={handleToggleMenu}>
                {toggleMenu ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile navigation */}
        <div className={`mobile-nav ${toggleMenu ? 'visible' : 'hidden'}`}>
          <div className='nav-links'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/product'}>Product</Link>
            <Link to={'/solution'}>solution</Link>
            <Link to={'/team'}>Team</Link>
            <Link to={'contact'}>Contact</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
