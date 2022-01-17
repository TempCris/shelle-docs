// ---Dependencys
import { combineReducers } from 'redux';
// ---Types
import { ReducerState as AppInfoState } from '@Redux/appInfo/customTypes';
import { ReducerState as HomeState } from '@Redux/appInfo/customTypesHome';
import { ReducerState as ProductListState } from '@Redux/appInfo/customTypesPl';
import { ReducerState as ProductDetailState } from '@Redux/appInfo/customTypesPd';
// ---Reducers
// ---Reducers
import appInfoReducer from '@Redux/appInfo/reducer';
import homeReducer from '@Redux/appInfo/Home';
import productListReducer from '@Redux/appInfo/productList';
import productDetailReducer from '@Redux/appInfo/productDetail';
// ----------------------------------------ALL REDUX STATE TYPE-----------------------------------
export interface ReduxState {
  appInfoReducer: AppInfoState;
  homeReducer: HomeState;
  productListReducer: ProductListState;
  productDetailReducer: ProductDetailState;
}

// -----------------------------------------ALL REDUX REDUCERS----------------------------------
const rootReducer = combineReducers({
  appInfoReducer,
  homeReducer,
  productListReducer,
  productDetailReducer
});

export default rootReducer;
