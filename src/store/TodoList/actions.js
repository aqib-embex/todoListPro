import {
  GET_TODO,
  GET_TODO_SUCCESSFUL,
} from "./actionTypes"

export const getTodo = (params) => (
  {
    type: GET_TODO,
    payload: params
  })

export const getTodoSuccessful = stores => {
  return {
    type: GET_TODO_SUCCESSFUL,
    payload: stores
  }
}


