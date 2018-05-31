import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { fetchSuccess, fetchFailure, fetchPosts } from './actions';

function* makeAsyncApiCall() {
    try {
        console.log('attempting to fetch posts');
        const res = yield call(
            axios.get,
            'https://jsonplaceholder.typicode.com/posts'
        );
        yield put(fetchSuccess(res.data));
    } catch (err) {
        yield put(fetchFailure(err.message));
    }
}

export default function* watchFetchPosts() {
    console.log('redux-saga is running FETCH_POSTS action listener');
    yield takeEvery([fetchPosts], makeAsyncApiCall);
}
