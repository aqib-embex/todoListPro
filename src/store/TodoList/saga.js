import { takeEvery, put } from "redux-saga/effects"

//User Redux states
import { GET_TODO } from "./actionTypes"

//Include Both Helper File with needed methods
import { getTodoSuccessful } from "./actions"

// initialize relavant method of both Auth

function* fetchCatData(param) {
  const response = param.payload;
  yield put(getTodoSuccessful(response))
}

export function* TodoListSaga() {
  yield takeEvery(GET_TODO, fetchCatData)
}

export default TodoListSaga;
