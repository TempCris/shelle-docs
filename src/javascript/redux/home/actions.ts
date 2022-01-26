// -------------------------------------------TYPES------------------------------------
import { GET_PUBLIC_HOME, GET_PRODUCTS } from '@Redux/home/types';
import { Product, ReducerState } from '@Redux/home/customTypes';
import { Dispatch } from 'redux';

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
