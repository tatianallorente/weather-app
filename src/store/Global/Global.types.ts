import { ReactNode } from 'react';

export interface GlobalReducerState {
  errorModal: {
    show: boolean;
    title: string;
    message: string | string[];
  };
}

export type GlobalContextProps = GlobalReducerState &
  Readonly<{
    setErrorModal: (errorContent: { title?: string; message?: string }) => void;
    closeErrorModal: () => void;
  }>;

export type SetErrorModal = Readonly<{
  type: 'SET_ERROR_MODAL';
  payload: { title?: string; message?: string };
}>;

export type CloseErrorModal = Readonly<{
  type: 'CLOSE_ERROR_MODAL';
}>;

export type CleanErrorModal = Readonly<{
  type: 'CLEAN_ERROR_MODAL';
}>;

export type Actions = SetErrorModal | CloseErrorModal | CleanErrorModal;

export type GlobalReducerHandler = (state: GlobalReducerState, actions: Actions) => GlobalReducerState;

export interface GlobalProviderProps {
  children: ReactNode;
}
