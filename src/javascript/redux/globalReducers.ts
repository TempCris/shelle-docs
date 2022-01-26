// ---Dependencys
import { combineReducers } from 'redux';
// ---Types
import { ReducerState as AppInfoState } from '@Redux/appInfo/customTypes';
import { ReducerState as HomeState } from '@Redux/home/customTypes';
// ---Reducers
import appInfoReducer from '@Redux/appInfo/reducer';
import homeReducer from '@Redux/home/reducer';
// ----------------------------------------ALL REDUX STATE TYPE-----------------------------------
export interface ReduxState {
  appInfoReducer: AppInfoState;
  homeReducer: HomeState;
}

// -----------------------------------------ALL REDUX REDUCERS----------------------------------
const rootReducer = combineReducers({
  appInfoReducer,
  homeReducer
});

export default rootReducer;
