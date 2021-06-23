import {
  GET_TODO_SUCCESSFUL,
} from "./actionTypes"


const INIT_STATE = {
  TodoList: []
}

const TodoList = (state = INIT_STATE, action) => {

  switch (action.type) {
    case GET_TODO_SUCCESSFUL:
      return {
        ...state,
        TodoList: action.payload,
      }

    default:
      return state
  }

}

export default TodoList;
