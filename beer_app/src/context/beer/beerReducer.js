import {
  LOAD_BEERS,
  SORT_BEERS,
  GET_BEER,
  SET_LOADING,
  SET_PAGE,
} from '../types';

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
    case SORT_BEERS:
      return {
        ...state,
        beers: action.payload,
        loading: false,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};
