import React, { useState } from 'react';
import 'tachyons';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/book';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <div className="formContainer">
      <legend id="form-title">ADD NEW BOOK</legend>
      <form className="d-flex">
        <label htmlFor="title">
          <input type="text" placeholder="Book Title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label htmlFor="author">
          <input type="text" placeholder="Author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <button
          type="button"
          className="formBtn pointer"
          onClick={() => {
            dispatch(addBook({ title, author, id: Date.now() }));
            setTitle('');
            setAuthor('');
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};
export default Form;
