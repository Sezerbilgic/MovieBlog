import React from 'react';
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className='header'>
        <div className='header-site'>
            <img className='header-logo' src={logo} alt=''/>
            <h3>MOVIE<span>BLOG</span></h3>
        </div>
        <div className='nav-link'>
            <ul className='nav-ul'>
                <li className='nav-li'>Anasayfa</li>
                <li className='nav-li'>Filmler</li>
                <li className='nav-li'>Diziler</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;