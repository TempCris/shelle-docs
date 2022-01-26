// -------------------------------------------TYPES------------------------------------
import { GET_PUBLIC_HOME, GET_PRODUCTS } from '@Redux/home/types';
import { Action, ReducerState, Product } from '@Redux/home/customTypes';

// -------------------------------------------STATE------------------------------------
const INITIAL_STATE = {
};

// ------------------------------------------REDUCER-----------------------------------
export default (action: Action, state = INITIAL_STATE) : ReducerState => {
  const { type, payload } = action;
  switch (type) {
    case GET_PUBLIC_HOME:
      return {
        ...state,
        ...<ReducerState>payload
      };

    case GET_PRODUCTS:
      return {
        ...<ReducerState>state,
        productsData: <Array<Product>>payload
      };

    default:
      return <ReducerState>state;
  }
};
