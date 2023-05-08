import { createContext, useReducer } from 'react';
import { initialState, reducer } from './AppReducer';

export const Context = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ transactions: state.transactions }}>
      {children}
    </Context.Provider>
  );
};
