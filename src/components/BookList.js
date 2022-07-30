import React, { useState } from 'react';
import Book from './Book';

const BookList = () => {
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
    <ul>
      {books.map((book) => {
        //console.log('List of books', book.author);
         return <Book key={book.id} id={book.id} book={book} />;
      })}
    </ul>
  );
};

export default BookList;
