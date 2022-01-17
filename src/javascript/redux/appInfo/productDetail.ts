/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
// -------------------------------------------TYPES------------------------------------
import { UPDATE_PRODUCT_DETAIL } from '@Redux/appInfo/types';
import { Dispatch } from 'redux';
import { ReducerState, Action, Product } from '@Redux/appInfo/customTypesPd';

export const updateReduxProdDetail = (data: Product) => (dispatch: Dispatch) : void => {
  dispatch({
    type: UPDATE_PRODUCT_DETAIL,
    payload: data
  });
};

// -------------------------------------------STATE------------------------------------
const INITIAL_STATE = {
  productDetail: {}
};

// ------------------------------------------REDUCER-----------------------------------
export default (state = INITIAL_STATE, action: Action) : ReducerState => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: <Product>payload
      };

    default:
      return <ReducerState>state;
  }
};
