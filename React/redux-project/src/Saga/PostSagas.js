import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataError } from '../Feature/ApiData/PostSlice';
import axios from 'axios';

function* fetchData() {
  try {
    // const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    const response = yield call(axios.get, 'http://localhost:8080/');
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataError(error));
  }
}

export function* watchFetchData() {
  yield takeEvery('posts/fetchDataRequest', fetchData);
}