import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../assests/logo-2.png'
import {BsGlobe2} from  "react-icons/bs";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={Logo} />
            <BsGlobe2 className='logo'/>
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/aboutus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
              
            </li>

            <li>
            <Link
                to='/contactus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
             
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
