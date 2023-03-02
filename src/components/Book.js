import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(id));
  };
  return (
    <li key={id}>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" onClick={handleClick}>Remove</button>
    </li>
  );
};

export default Book;

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
