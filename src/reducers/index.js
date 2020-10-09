import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import historyDataReducer from './historyData';

const initialState = {
  HistoryData: historyDataReducer,
  routing: {}
}

const rootReducer = combineReducers({
  ...initialState,
  routing: routerReducer
});

export default rootReducer;
