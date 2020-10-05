import { GET_USERS, GET_USERS_SUCCESS } from '../constants/users';

export default function users(state = [], action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return [...action.payload];
    case GET_USERS:
    default:
      return state;
  }
}
