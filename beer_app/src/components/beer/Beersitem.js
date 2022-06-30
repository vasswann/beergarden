import React from 'react';
import { Link } from 'react-router-dom';

const Beersitem = ({ beer: { id, name, image_url } }) => {
  return (
    <div className='card '>
      <div>
        <h2 className='m-bottom'>{name}</h2>
        <img src={image_url} alt='' className='beer_image all-center' />
      </div>
      <Link to={`/beer/${id}`} className='btn btn-card'>
        Learn More
      </Link>
    </div>
  );
};

export default Beersitem;
