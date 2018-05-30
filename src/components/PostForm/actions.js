export const ADD_POST = 'ADD_POST';
export const ADD_POST_SUCCEEDED = 'ADD_POST_SUCCEEDED';
export const ADD_POST_FAILED = 'ADD_POST_FAILED';

export const addPost = post => {
    return { type: ADD_POST, payload: post };
};

export const addPostSuccess = post => {
    return { type: ADD_POST_SUCCEEDED, payload: post };
};

export const addPostFailure = err => {
    return { type: ADD_POST_FAILED, payload: err };
};
