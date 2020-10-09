import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './../reducers';

const initialState = {
  HistoryData: {
    Data: []
  },
  // LiveData: {
  //   Data: []
  // },
  LiveData: {
    // SortBy: '',
    Data: []
  },
  Search: {
    FormatedData: []
  },
  routing: []
}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
)

export default store;
