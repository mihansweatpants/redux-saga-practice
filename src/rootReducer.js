import { combineReducers } from 'redux';
import { reducer as postReducer } from './components/App';

export default combineReducers({
    posts: postReducer
});
