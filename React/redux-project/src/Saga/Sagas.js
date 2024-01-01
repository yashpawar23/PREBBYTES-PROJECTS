import {  put, delay, takeEvery, select } from 'redux-saga/effects';
import { increment, decrement } from '../Feature/Counter/counterSlice';



function* incrementAsync() {
  yield delay(1000); // Simulate an async operation
  yield put(increment());
  const name = yield select(state => state.counter.value)
    console.log("state value",name)
}

function* decrementAsync() {
  yield delay(1000); // Simulate an async operation
  yield put(decrement());
}

export  function* watchCounter() {
  yield takeEvery('counter/incrementAsync', incrementAsync);
  yield takeEvery('counter/decrementAsync', decrementAsync);
}
