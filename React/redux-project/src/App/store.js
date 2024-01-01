import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import postReducer from '../Feature/ApiData/PostSlice'
// import { watchFetchData } from '../Saga/PostSagas';
import counterReducer from '../Feature/Counter/counterSlice';
import userReducer from '../Feature/User/UserSlice';
import rootSaga from '../Saga/RootSaga';
import Todoreducer from '../Feature/ToDolist/TodoSlice'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
    user: userReducer,
    todos: Todoreducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga );

export default store
