// -------------------------------------------TYPES------------------------------------
import { UPDATE_SEARCH_PARAMS, UPDATE_SEARCH_PRODUCTS } from '@Redux/productList/types';
import {
  Action, ReducerState, SearchParams, ProductPayload
} from '@Redux/productList/customTypes';

// -------------------------------------------STATE------------------------------------
const INITIAL_STATE = {
  searchParams: {
    pageNumber: 1,
    pageSize: 30,
    categoria: 'Todos'
  },
  products: [],
  productCount: 0
};

// ------------------------------------------REDUCER-----------------------------------
export default (action: Action, state = INITIAL_STATE) : ReducerState => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_SEARCH_PARAMS:
      return {
        ...state,
        searchParams: {
          // ...state.searchParams,
          ...<SearchParams>payload
        }
      };
    case UPDATE_SEARCH_PRODUCTS:
      return {
        ...state,
        ...<ProductPayload>payload
      };
    default:
      return <ReducerState>state;
  }
};
