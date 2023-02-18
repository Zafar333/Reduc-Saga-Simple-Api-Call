import { takeEvery, call, put } from "redux-saga/effects";
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "./actions/actions";
async function usersFetch() {
  return await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );
}
function* workGetUsersFetch({ data }) {
  const user = yield call(usersFetch);

  yield put({ type: GET_USERS_SUCCESS, user });
}

function* mysaga() {
  yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
}
export default mysaga;
