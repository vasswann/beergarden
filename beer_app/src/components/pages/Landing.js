import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BeerContext from '../../context/beer/beerContext';

const Landing = () => {
  const beerContext = useContext(BeerContext);
  return (
    <div className='landing_page'>
      <div className='landing_page--action all-center'>
        <h2>
          Order beer online at the UK's best online beer shop with free delivery
        </h2>
        <Link
          to='/Home'
          className='btn btn-landing'
          onClick={beerContext.loadBeers}
        >
          Explore our Selection
        </Link>
      </div>
    </div>
  );
};

export default Landing;
