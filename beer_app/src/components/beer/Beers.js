import React, { useContext } from 'react';
import Beersitem from './Beersitem';
import Spinner from '../layout/Spinner';
import BeerContext from '../../context/beer/beerContext';

const Beers = () => {
  const beerContext = useContext(BeerContext);
  const { loading, beers } = beerContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='cards'>
        {beers.map((beer) => (
          <Beersitem key={beer.id} beer={beer} />
        ))}
      </div>
    );
  }
};

export default Beers;
