import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { dataReducer } from './reducers/reducerData';
import { pageReducer } from './reducers/reducerPageNumber';
import { modalReducer } from './reducers/reducerModal';

const reducer = combineReducers({
  storeData: dataReducer,
  storePage: pageReducer,
  storeModal: modalReducer,
});

export const store = configureStore({ reducer });
