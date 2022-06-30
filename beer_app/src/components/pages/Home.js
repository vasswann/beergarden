import React from 'react';
import Beers from '../beer/Beers';
import Sort from '../beer/Sort';

const Home = () => {
  return (
    <div className='container'>
      <Sort />
      <Beers />
    </div>
  );
};

export default Home;
