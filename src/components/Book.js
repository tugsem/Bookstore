/* eslint react/prop-types: 0 */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/book';
import 'tachyons';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="bookContainer">
      <div className="bookDetails">
        <h2>{title}</h2>
        <p className="colorBlue">{author}</p>
        <div className="btns">
          <div
            className='colorBlue pointer pb="2px"'
            role="button"
            onClick={() => dispatch(removeBook(id))}
            onKeyDown={() => dispatch(removeBook(id))}
            tabIndex={0}
          >
            Remove
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
