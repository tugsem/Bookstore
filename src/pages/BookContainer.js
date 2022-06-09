import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const bookList = useSelector((state) => state.bookReducer);
  return (
    <div className="booksContainer">
      <ul className="bookList">
        {bookList.map((book) => (
          <li key={book.id}>
            <Book title={book.title} author={book.author} id={book.id} />
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default Books;
