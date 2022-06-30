import { LOAD_BEERS, SORT_BEERS, GET_BEER, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOAD_BEERS:
      return {
        ...state,
        beers: action.payload,
        loading: false,
      };
    case GET_BEER:
      return {
        ...state,
        beer: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
