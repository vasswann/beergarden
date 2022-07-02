import React from 'react';
import Beers from '../beer/Beers';
import Sort from '../beer/Sort';
import Pagin from '../beer/Pagin';

const Home = () => {
  return (
    <div className='container'>
      <Sort />
      <Beers />
      <Pagin />
    </div>
  );
};

export default Home;
