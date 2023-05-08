import { useContext } from 'react';

import { Context } from './GlobalState';

export const useGlobalState = () => {
  const data = useContext(Context);
  return data;
};
