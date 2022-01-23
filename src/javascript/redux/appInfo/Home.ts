/* eslint-disable default-param-last */
// -------------------------------------------TYPES------------------------------------
import { GET_PUBLIC_HOME, GET_PRODUCTS } from '@Redux/appInfo/types';
import { Action, ReducerState, Product } from '@Redux/appInfo/customTypesHome';
import { Dispatch } from 'redux';

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

// -------------------------------------------TYPES------------------------------------
export const saveHomeData = (homeData: ReducerState) => (dispatch: Dispatch) : void => {
  dispatch({
    type: GET_PUBLIC_HOME,
    payload: homeData
  });
};

export const saveReduxProducts = (productsData: Array<Product>) => (dispatch: Dispatch) : void => {
  dispatch({
    type: GET_PRODUCTS,
    payload: productsData
  });
};
