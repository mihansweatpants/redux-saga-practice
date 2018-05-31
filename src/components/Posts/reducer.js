import { handleActions } from 'redux-actions';
import { fetchPosts, fetchFailure, fetchSuccess } from '../Posts';

const initialState = {
    fetching: false,
    fetchError: null,
    posts: []
};
