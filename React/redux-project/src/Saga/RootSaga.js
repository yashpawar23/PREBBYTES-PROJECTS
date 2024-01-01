import {all} from 'redux-saga/effects'
import { watchFetchData } from './PostSagas'
import { watchCounter } from './Sagas'
import {watchUpdateTodo} from './Todosagas'


function* rootSaga(){
    yield all([
        watchFetchData(),
        watchCounter(),
        watchUpdateTodo()
    ])
}

export default rootSaga