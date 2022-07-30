import React from 'react';
import PropTypes from 'prop-types';

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
