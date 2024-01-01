import { call, put, takeEvery } from 'redux-saga/effects';
import { updateTodo } from '../Feature/ToDolist/TodoSlice';
import axios from 'axios';

function* updateTodoItem(action) {
  try {
    const updatedTodo = yield call(axios.put, `https://jsonplaceholder.typicode.com/todos/${action.payload.id}`, action.payload);
    yield put(updateTodo(updatedTodo.data));
  } catch (error) {
    console.error(error);
  }
}

export function* watchUpdateTodo() {
  yield takeEvery('todos/updateTodo', updateTodoItem);
}