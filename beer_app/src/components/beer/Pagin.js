import React, { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import BeerContext from '../../context/beer/beerContext';

const Pagin = () => {
  const beerContext = useContext(BeerContext);
  const { loadBeers } = beerContext;

  // pagination is workig but not saved in the state. When you back the data is lost, and load the first page.
  const handlePageClick = (page) => {
    loadBeers(page.selected + 1);
  };

  return (
    <div>
      <ReactPaginate
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination-container'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Pagin;
