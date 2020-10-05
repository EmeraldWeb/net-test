import { GET_USERS, GET_USERS_SUCCESS } from '../constants/users';
import usersMock from '../mocks/users.json';

export const getUser = () => async (dispatch) => {
  dispatch({ type: GET_USERS });

  await setTimeout(() => {
    const payload = usersMock;
    if (payload) {
      dispatch({ type: GET_USERS_SUCCESS, payload });
    }
  }, Math.random() * 10 * 500);
};
