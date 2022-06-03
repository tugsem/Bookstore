/* eslint react/prop-types: 0 */
import React from 'react';
import 'tachyons';

const Book = ({ title = 'The Hunger Games', author = 'Suzanne Collins' }) => (
  <div className="bookContainer">
    <div className="bookDetails">
      <h2>{title}</h2>
      <p className="colorBlue">{author}</p>
      <div className="btns">
        <div className='colorBlue pointer pb="2px"'>Remove</div>
      </div>
    </div>
  </div>
);

export default Book;
