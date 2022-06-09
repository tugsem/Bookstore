import { sendData, deleteData, getData } from './fetchApi';

const ADD = 'ADD';
const REMOVE = 'REMOVE';
const FETCH_BOOKS = 'FETCH_BOOKS';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/2cxEB2YgKRe7E1CgnV3A/books';

export const fetchBooks = (payload) => ({
  type: FETCH_BOOKS,
  payload,
});

export const addBook = (payload) => async (dispatch) => {
  await sendData(URL, payload);
  return dispatch({ type: ADD, payload });
};

export const removeBook = (index) => async (dispatch) => {
  await deleteData(URL, index);
  return dispatch({ type: REMOVE, payload: index });
};

export const displayBooks = () => async (dispatch) => {
  const books = await getData(URL);
  const bookArr = [];
  Object.keys(books).forEach((id) => {
    bookArr.push({
      item_id: id,
      title: books[id][0].title,
      author: books[id][0].author,
    });
  });
  dispatch(fetchBooks(bookArr));
};

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((book) => book.item_id !== action.payload);
    case FETCH_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default bookReducer;
