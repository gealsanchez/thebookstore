import React from 'react';

function AddBook() {
  return (
    <div>
      <h2>Add New Item</h2>
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
