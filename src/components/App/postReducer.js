import { handleActions } from 'redux-actions';
import { fetchPosts, fetchFailure, fetchSuccess } from '../Posts';
import { addPost, addPostFailure, addPostSuccess } from '../PostForm';

const initialState = {
    fetching: false,
    fetchError: null,
    posts: [],
    newPost: {},
    submitting: false,
    submitError: null
};

export default handleActions(
    {
        [fetchPosts]: state => ({
            ...state,
            fetching: true
        }),
        [fetchSuccess]: (state, action) => ({
            ...state,
            fetching: false,
            posts: action.payload
        }),
        [fetchFailure]: (state, action) => ({
            ...state,
            fetching: false,
            fetchError: action.payload
        }),
        [addPost]: state => ({
            ...state,
            submitting: true
        }),
        [addPostSuccess]: (state, action) => ({
            ...state,
            submitting: false,
            newPost: action.payload
        }),
        [addPostFailure]: (state, action) => ({
            ...state,
            submitting: false,
            submitError: action.payload
        })
    },
    initialState
);
