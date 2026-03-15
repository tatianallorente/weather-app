import { useReducer } from 'react';
import { GlobalContext } from './Global.context';
import { globalReducer } from './Global.reducer';
import { GlobalContextProps, GlobalProviderProps, GlobalReducerState } from './Global.types';

const initialState: GlobalReducerState = {
  errorModal: {
    show: false,
    title: '',
    message: '',
  },
};

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const setErrorModal = (errorContent: { title?: string; message?: string }) => {
    dispatch({ type: 'SET_ERROR_MODAL', payload: errorContent });
  };

  const closeErrorModal = () => {
    dispatch({ type: 'CLOSE_ERROR_MODAL' });
    setTimeout(() => {
      dispatch({ type: 'CLEAN_ERROR_MODAL' });
    }, 100);
  };

  const ctx: GlobalContextProps = {
    ...state,
    setErrorModal,
    closeErrorModal,
  };

  return <GlobalContext.Provider value={ctx}>{children}</GlobalContext.Provider>;
};
