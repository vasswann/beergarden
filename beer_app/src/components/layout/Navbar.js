import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/android-chrome-512x512.png';
import BeerContext from '../../context/beer/beerContext';

const Navbar = () => {
  const beerContext = useContext(BeerContext);
  const { beers } = beerContext;

  return (
    <nav className='navbar'>
      <div className='navbar_item'>
        <Link to='/'>
          <img src={logo} alt='' className='logo' />
        </Link>
        <h1>Beer Garden</h1>
      </div>
      <ul>
        {beers.length > 0 && (
          <li>
            <Link to='/Home'>Home</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
