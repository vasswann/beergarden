import React, { useContext } from 'react';
import BeerContext from '../../context/beer/beerContext';

const Sort = () => {
  const beerContext = useContext(BeerContext);
  const { beers, sortBeers } = beerContext;

  const compare = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  const comparePh = (a, b) => {
    if (a.ph < b.ph) {
      return -1;
    }
    if (a.ph > b.ph) {
      return 1;
    }
    return 0;
  };

  const onChange = (e) => {
    if (e.target.value === 'Name') {
      sortBeers(beers.sort(compare));
    } else if (e.target.value === 'PH') {
      sortBeers(beers.sort(comparePh));
      console.log('heureka');
    }
  };

  return (
    <div className='sort_box all-center'>
      <p>Sort by: </p>

      <select size='1' name='beers' id='beers' onChange={onChange}>
        <option value='0'>Select your sort</option>
        <option value='Name'>Name</option>
        <option value='PH'>PH</option>
      </select>
    </div>
  );
};

export default Sort;
