import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const list = books.map((book) => (
    <Book key={book.id} id={book.id} title={book.title} author={book.author} />
  ));

  return (
    <ul>
      {list}
    </ul>
  );
};

export default BookList;
