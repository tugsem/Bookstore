const ADD = 'ADD';
const REMOVE = 'REMOVE';

const initialState = [
  {
    title: 'book1',
    author: 'author1',
    id: 0,
  },
  {
    title: 'book2',
    author: 'author2',
    id: 1,
  },
];

export const addBook = (bookObj) => ({
  type: ADD,
  payload: bookObj,
});

export const removeBook = (index) => ({
  type: REMOVE,
  payload: index,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
