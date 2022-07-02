import React, { useReducer } from 'react';
import axios from 'axios';
import BeerContext from './beerContext';
import BeerReducer from './beerReducer';
import { LOAD_BEERS, SORT_BEERS, GET_BEER, SET_LOADING } from '../types';

const BeerState = (props) => {
  const initialState = {
    beers: [],
    beer: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(BeerReducer, initialState);

  // Load beers from API
  const loadBeers = async (num = 1) => {
    try {
      setLoading();
      const res = await axios(
        `https://api.punkapi.com/v2/beers?page=${num}&per_page=24`
      );
      dispatch({
        type: LOAD_BEERS,
        payload: res.data,
      });
    } catch (error) {
      // only console.log the error message. I could use a seperate type and put the message in to payload
      console.log(error);
    }
  };
  // get a beer
  const getBeer = async (id) => {
    try {
      setLoading();
      const res = await axios(`https://api.punkapi.com/v2/beers/${id}`);
      dispatch({
        type: GET_BEER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // // sort beers
  const sortBeers = async (data) => {
    try {
      setLoading();
      dispatch({
        type: SORT_BEERS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <BeerContext.Provider
      value={{
        beers: state.beers,
        beer: state.beer,
        loading: state.loading,
        loadBeers,
        getBeer,
        sortBeers,
      }}
    >
      {props.children}
    </BeerContext.Provider>
  );
};

export default BeerState;
