/* eslint-disable default-param-last */
// -------------------------------------------TYPES------------------------------------
import { GET_PUBLIC_HOME, GET_PRODUCTS } from '@Redux/appInfo/types';
import { Action, ReducerState, Product } from '@Redux/appInfo/customTypesHome';

// -------------------------------------------STATE------------------------------------
const INITIAL_STATE = {
};

// ------------------------------------------REDUCER-----------------------------------
export default (state = INITIAL_STATE, action: Action) : ReducerState => {
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
