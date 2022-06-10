/* eslint react/prop-types: 0 */
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/book';
import 'tachyons';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="bookContainer d-flex">
      <div className="bookDetails">
        <p className="darkGrey"><b>Action</b></p>
        <h2>{title}</h2>
        <p className="colorBlue">{author}</p>
        <div className="btns d-flex pv2">
          <div className="colorBlue pointer pr3">Comments</div>
          <div
            className="colorBlue pointer bordered"
            role="button"
            onClick={() => dispatch(removeBook(id))}
            onKeyDown={() => dispatch(removeBook(id))}
            tabIndex={0}
          >
            Remove
          </div>
          <div className="colorBlue pointer pl3">Edit</div>
        </div>
      </div>
      <div className="d-flex seperator">
        <div className="d-flex progressBar">
          <div style={{ width: 50, height: 50 }}>
            <CircularProgressbar value={66} />
          </div>
          <div className="d-flex-column">
            <h3 className="f3">66&#37;</h3>
            <p className="darkGrey">Completed</p>
          </div>
        </div>
        <div className="line" />
        <div className="chapter d-flex-column ">
          <p className="darkGrey f6">CURRENT CHAPTER</p>
          <p>Introduction</p>
          <button type="button" className="updateBtn ph4 pointer mt3">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
