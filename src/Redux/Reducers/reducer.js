import { GET_USERS_SUCCESS } from "../actions/actions";
const initialState = {
  users: [],
};
const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.user };

    default:
      return state;
  }
};
export default firstReducer;
