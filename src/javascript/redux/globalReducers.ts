// ---Dependencys
import { combineReducers } from 'redux';
// ---Types
import { ReducerState as AppInfoState } from '@Redux/appInfo/customTypes';
import { ReducerState as HomeState } from '@Redux/home/customTypes';
import { ReducerState as ProductDetailState } from '@Redux/productDetail/customTypes';
import { ReducerState as ProductListState } from '@Redux/productList/customTypes';
// ---Reducers
import appInfoReducer from '@Redux/appInfo/reducer';
import homeReducer from '@Redux/home/reducer';
import productDetailReducer from '@Redux/productDetail/reducer';
import productListReducer from '@Redux/productList/reducer';
// ----------------------------------------ALL REDUX STATE TYPE-----------------------------------
export interface ReduxState {
  appInfoReducer: AppInfoState;
  homeReducer: HomeState;
  productDetailReducer: ProductDetailState;
  productListReducer:ProductListState;
}

// -----------------------------------------ALL REDUX REDUCERS----------------------------------
const rootReducer = combineReducers({
  appInfoReducer,
  homeReducer,
  productDetailReducer,
  productListReducer
});

export default rootReducer;
