import { createContext, useReducer, useEffect } from 'react';
import { initialState, reducer, types } from './AppReducer';

export const Context = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const localData = localStorage.getItem('transactions');
    return localData ? JSON.parse(localData) : initialState;
  });

  const addTransaction = ({ id, description, amount }) => {
    dispatch({
      type: types.addTransaction,
      payload: { id, description, amount },
    });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: types.deleteTransaction, payload: { id } });
  };

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
