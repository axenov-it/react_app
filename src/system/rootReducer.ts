import { combineReducers } from "redux";
import postsReducer from "components/modules/PostsList/redux/reducer";

export default combineReducers({
  posts: postsReducer,
});
