const CHECK_STATUS = 'CHECK_STATUS';

export const checkStatus = () => ({
  type: CHECK_STATUS,
  completed: false,
});

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [...state, { completed: !action.completed }];
    default:
      return state;
  }
};

export default categoryReducer;
