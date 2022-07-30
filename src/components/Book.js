import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <div>
    <li className="list-container">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <div className="buttons">
        <a href="/comments">Comments</a>
        <a href="/remove">Remove</a>
        <a href="/edit">Edit</a>
      </div>
    </li>
  </div>
);

Book.defaultProps = {
  book: {},
};

Book.propTypes = {
  book: {
    title: PropTypes.string,
    author: PropTypes.string,
  },
};

export default Book;
