export const types = {
  addTransaction: 'ADD_TRANSACTION',
  deleteTransaction: 'DELETE_TRANSACTION',
};

export const initialState = {
  transactions: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case types.addTransaction:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case types.deleteTransaction:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
