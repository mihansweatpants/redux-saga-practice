import { all } from 'redux-saga/effects';

import { watcherSaga as watchFetchPosts } from './components/Posts';
import { watcherSaga as watchAddPosts } from './components/PostForm';

export default function* rootSaga() {
    yield all([watchFetchPosts(), watchAddPosts()]);
}
