import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/book';
import categoryReducer from './categories/categories';

const reducer = combineReducers({
  bookReducer,
  categoryReducer,
});

const store = configureStore({ reducer });

export default store;
