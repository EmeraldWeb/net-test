import { GET_USERS } from '../constants/users';

export default function users(state = [], action) {
  switch (action.type) {
    case GET_USERS:
      if (action.payload) {
        return {
          ...state,
          ...action.payload,
        };
      }

      return state;
    default:
      return state;
  }
}
