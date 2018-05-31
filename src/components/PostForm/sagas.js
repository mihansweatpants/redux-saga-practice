import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { addPost, addPostFailure, addPostSuccess } from './actions';

function* makeAsyncApiCall(action) {
    try {
        console.log('attempting to submit post');
        const res = yield call(
            axios.post,
            'https://jsonplaceholder.typicode.com/posts',
            action.payload
        );
        yield put(addPostSuccess(res.data));
    } catch (err) {
        yield put(addPostFailure(err.message));
    }
}

export default function* watchAddPosts() {
    console.log('redux-saga is running ADD_POST action listener');
    yield takeLatest([addPost], makeAsyncApiCall);
}
