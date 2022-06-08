import React from 'react';
import 'tachyons';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/book';

const Form = () => {
  const dispatch = useDispatch();

  return (
    <div className="formContainer">
      <legend id="form-title">ADD NEW BOOK</legend>
      <form className="d-flex">
        <label htmlFor="title">
          <input type="text" placeholder="Book Title" id="title" />
        </label>
        <label htmlFor="author">
          <input type="text" placeholder="Author" id="author" />
        </label>
        <button
          type="button"
          className="formBtn pointer"
          onClick={() => {
            const titleInp = document.getElementById('title');
            const authorInp = document.getElementById('author');
            dispatch(
              addBook({
                title: titleInp.value,
                author: authorInp.value,
                id: Date.now(),
              }),
            );
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};
export default Form;
