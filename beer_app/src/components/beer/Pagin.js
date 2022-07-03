import React, { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import BeerContext from '../../context/beer/beerContext';

const Pagin = () => {
  const beerContext = useContext(BeerContext);
  const { page, setPage, loadBeers } = beerContext;

  const handlePageClick = (count) => {
    setPage(count.selected + 1);
    loadBeers(page);
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
        initialPage={page - 1}
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
