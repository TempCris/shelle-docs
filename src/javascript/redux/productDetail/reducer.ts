// -------------------------------------------TYPES------------------------------------
import { UPDATE_PRODUCT_DETAIL } from '@Redux/productDetail/types';
import { ReducerState, Action, Product } from '@Redux/productDetail/customTypes';

// -------------------------------------------STATE------------------------------------
const INITIAL_STATE = {
  productDetail: {}
};

// ------------------------------------------REDUCER-----------------------------------
export default (action: Action, state = INITIAL_STATE) : ReducerState => {
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
