import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayBooks } from '../redux/books/book';
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const bookList = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayBooks());
  }, []);

  return (
    <div className="booksContainer">
      <ul className="bookList">
        {bookList.map((book) => (
          <li key={book.item_id}>
            <Book title={book.title} author={book.author} id={book.item_id} />
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default Books;
