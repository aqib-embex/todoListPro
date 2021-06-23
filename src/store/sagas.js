import { all, fork } from "redux-saga/effects"

import TodoListSaga from "./TodoList/saga"

export default function* rootSaga() {
  yield all([
    fork(TodoListSaga)
  ])
}
