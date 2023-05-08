export const types = {
  addTransaction: 'ADD_TRANSACTION',
};

export const initialState = {
  transactions: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case types.addTransaction:
      return state;

    default:
      return state;
  }
};
