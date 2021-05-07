import { combineReducers } from 'redux';
import postReducer from './postsReducer';
import usersReducer from './usersReduser';

export default combineReducers({
  posts: postReducer,
  users: usersReducer,
});
