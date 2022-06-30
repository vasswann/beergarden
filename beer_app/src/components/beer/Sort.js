import React, { useContext, useEffect, useState } from 'react';
import BeerContext from '../../context/beer/beerContext';
import Spinner from '../layout/Spinner';

const Sort = () => {
  const beerContext = useContext(BeerContext);
  const { beers, sortBeers } = beerContext;

  const onChange = (e) => {
    if (e.target.value === 'Name') {
      sortBeers(beers.sort(compare));
    }
  };

  const compare = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };
  // console.log(beers.sort(compare));

  // useEffect(() => {
  //   if (input === 'Name') {
  //     // sortBeers(sortedBeers);
  //   }
  // }, []);

  return (
    <div className='sort_box all-center'>
      <p>Sort by: </p>

      <select size='1' name='beers' id='beers' onChange={onChange}>
        <option value='0'>Select your sort</option>
        <option value='Name'>Name</option>
        <option value='Strength'>Strength</option>
      </select>
    </div>
  );
};

export default Sort;
