// -------------------------------------------TYPES------------------------------------
import { UPDATE_PRODUCT_DETAIL } from '@Redux/productDetail/types';
import { Dispatch } from 'redux';
import { Product } from '@Redux/productDetail/customTypes';

export const updateReduxProdDetail = (data: Product) => (dispatch: Dispatch) : void => {
  dispatch({
    type: UPDATE_PRODUCT_DETAIL,
    payload: data
  });
};
