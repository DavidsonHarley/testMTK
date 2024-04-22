import * as type from '../actions/actionModal';

export const modalReducer = (state = { window: false }, action) => {
  switch (action.type) {
    case type.MODAL:
      return { ...state, window: action.payload };
    default:
      return state;
  }
};
