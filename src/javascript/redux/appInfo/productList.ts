/* eslint-disable default-param-last */
// -------------------------------------------TYPES------------------------------------
import { UPDATE_SEARCH_PARAMS, UPDATE_SEARCH_PRODUCTS } from '@Redux/appInfo/types';
import { Dispatch } from 'redux';
import {
  SearchParams, ProductPayload, Action, ReducerState
} from '@Redux/appInfo/customTypesPl';

export const updateSearchParams = (params: SearchParams) => (dispatch: Dispatch) : void => {
  const { pageSize, pageNumber } = params;
  const fixedPagination = {
    ...params,
    pageSize: pageSize ?? 30,
    pageNumber: pageNumber ?? 1
  };
  dispatch({
    type: UPDATE_SEARCH_PARAMS,
    payload: fixedPagination
  });
};

export const updateReduxProducts = (data: ProductPayload) => (dispatch: Dispatch) : void => {
  dispatch({
    type: UPDATE_SEARCH_PRODUCTS,
    payload: data
  });
};

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
export default (state = INITIAL_STATE, action: Action) : ReducerState => {
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
