import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/book';
import categoryReducer from './categories/categories';

const store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoryReducer,
  },
});

export default store;
