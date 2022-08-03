import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.title = action.payload.title;
      state.author = action.payload.author;
    },
  },
});

export const { addBook } = bookSlice.actions;
