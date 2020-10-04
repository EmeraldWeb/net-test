import { GET_USERS } from '../constants/users';
import usersMock from '../mocks/users.json';

export default async function getUser(dispatch) {
  await setTimeout(() => {
    dispatch({ type: GET_USERS, payload: usersMock });
  }, Math.random() * 10 * 500);
}
