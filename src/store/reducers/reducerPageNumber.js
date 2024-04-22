import * as type from '../actions/actionPage';

export const pageReducer = (state = { page: 1 }, action) => {
  switch (action.type) {
    case type.PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
