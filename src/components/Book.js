import React from 'react';

const Book = ({ book }) => (
  <>
    <li>{book.title}</li>
    <li>{book.author}</li>
    <div className="buttons">
      <a href="/comments">Comments</a>
      <a href="/remove">Remove</a>
      <a href="/edit">Edit</a>
    </div>
  </>
);

export default Book;
