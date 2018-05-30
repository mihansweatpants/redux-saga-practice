export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCHING_SUCCEEDED = 'FETCHING_SUCCEEDED';
export const FETCHING_FAILED = 'FETCHING_FAILED';

export const fetchPosts = () => ({
    type: FETCH_POSTS
});

export const fetchSuccess = posts => ({
    type: FETCHING_SUCCEEDED,
    payload: posts
});

export const fetchFailure = err => ({
    type: FETCHING_FAILED,
    payload: err
});

export const DELETE_POST = 'DELETE_POST';
