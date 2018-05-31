import { createAction } from 'redux-actions';

export const key = 'components/Posts';

export const fetchPosts = createAction(`${key}/FETCH_POSTS`);
export const fetchSuccess = createAction(`${key}/FETCHING_SUCCEEDED`);
export const fetchFailure = createAction(`${key}/FETCHING_FAILED`);
