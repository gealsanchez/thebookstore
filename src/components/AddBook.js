import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    title: '',
    author: '',
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      id: v4(),
      title: state.title,
      author: state.author,
    };
    dispatch(addBook(newBook));
    setState({ title: '', author: '' });
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" name="title" onChange={handleChange} />
        <input type="text" placeholder="Author" name="author" onChange={handleChange} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
