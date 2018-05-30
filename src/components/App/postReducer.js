import { FETCH_POSTS, FETCHING_SUCCEEDED, FETCHING_FAILED } from '../Posts';
import { ADD_POST, ADD_POST_FAILED, ADD_POST_SUCCEEDED } from '../PostForm';

const initialState = {
    fetching: false,
    fetchError: null,
    posts: [],
    newPost: {},
    submitting: false,
    submitError: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                fetching: true
            };
        case FETCHING_SUCCEEDED:
            return {
                ...state,
                fetching: false,
                posts: action.payload
            };
        case FETCHING_FAILED:
            return {
                ...state,
                fetching: false,
                fetchError: action.payload
            };
        case ADD_POST:
            return {
                ...state,
                submitting: true
            };
        case ADD_POST_SUCCEEDED:
            return {
                ...state,
                submitting: false,
                newPost: action.payload
            };
        case ADD_POST_FAILED:
            return {
                ...state,
                submitting: false,
                submitError: action.payload
            };
        default:
            return state;
    }
}
