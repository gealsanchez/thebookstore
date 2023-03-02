import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/books';
import categoriesSlice from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksSlice,
    categories: categoriesSlice,
  },
});

export default store;
