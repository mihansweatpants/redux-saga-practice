import { createAction } from 'redux-actions';

export const key = 'components/PostForm';

export const addPost = createAction(`${key}/ADD_POST`);
export const addPostSuccess = createAction(`${key}/ADD_POST_SUCCEEDED`);
export const addPostFailure = createAction(`${key}/ADD_POST_FAILED`);

// export const addPost = post => {
//     return { type: ADD_POST, payload: post };
// };

// export const addPostSuccess = post => {
//     return { type: ADD_POST_SUCCEEDED, payload: post };
// };

// export const addPostFailure = err => {
//     return { type: ADD_POST_FAILED, payload: err };
// };
