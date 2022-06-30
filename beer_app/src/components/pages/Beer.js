import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link, useParams } from 'react-router-dom';
import BeerContext from '../../context/beer/beerContext';

const Beer = () => {
  // app level state first variant
  const beerContext = useContext(BeerContext);
  const { loading, beers, getBeer } = beerContext;
  const { id } = useParams();
  // useEffect(() => {
  //   getBeer(id);
  //   // eslint-disable-next-line
  // }, []);

  // here i am not using app level state second variant
  const beerpost = beers.filter((beer) => beer.id == id);
  const { name, first_brewed, description, image_url, ibu, abv, ebc, srm, ph } =
    beerpost[0];

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <div className='beer_item container'>
        <div className='all-center beer_item-box'>
          <img src={image_url} alt='' style={{ height: '25rem' }} />
          <h1>{name}</h1>
          <h3>First brewed {first_brewed}</h3>
          <p>{description}</p>
          <br />
          <p>
            <strong>ABV</strong> {abv}, <strong>IBU</strong> {ibu},
            <strong>EBC</strong> {ebc}, <strong>SRM</strong> {srm},{' '}
            <strong>PH</strong> {ph}
          </p>
        </div>
      </div>
      <Link to={'/Home'} className='btn btn-card all-center container'>
        Back to homepage
      </Link>
    </Fragment>
  );
};

export default Beer;
