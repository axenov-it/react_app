import { combineReducers } from "redux";
import postsReducer from "components/PostsList/redux/reducer";

export default combineReducers({
  posts: postsReducer,
});
