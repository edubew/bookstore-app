import React, { useState } from 'react';
import Book from './Book';
import InputForm from './InputForm';

const BookList = () => {
  // eslint-disable-next-line
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzzane Collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Suzzane Collins',
    },
  ]);
  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book key={book.id} id={book.id} book={book} />
        ))}
      </ul>
      <InputForm />
    </div>
  );
};

export default BookList;
