import { GlobalReducerHandler } from './Global.types';

export const globalReducer: GlobalReducerHandler = (state, action) => {
  switch (action.type) {
    case 'SET_ERROR_MODAL':
      return {
        ...state,
        errorModal: {
          show: true,
          title: action.payload.title ?? '',
          message: action.payload.message ?? '',
        },
      };
    case 'CLOSE_ERROR_MODAL':
      return {
        ...state,
        errorModal: {
          ...state.errorModal,
          show: false,
        },
      };
    case 'CLEAN_ERROR_MODAL':
      return {
        ...state,
        errorModal: {
          show: false,
          title: '',
          message: '',
        },
      };
    default:
      return state;
  }
};
