import * as type from '../actions/actionData';

export const dataReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case type.DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
