import { combineReducers } from "redux";
import postsListReducer from "components/modules/PostsList/redux/reducer";
import homeReducer from "components/pages/Home/redux/reducer";

export default combineReducers({
  postsList: postsListReducer,
  home: homeReducer,
});
