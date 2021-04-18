import { PostInterface } from "../interfaces";

interface StateInterface {
  posts: ReadonlyArray<PostInterface>;
  isFetch: boolean;
}

const initialState: StateInterface = {
  posts: [],
  isFetch: false,
};

const postsListReducer = (
  state: StateInterface = initialState,
  action: any
) => {
  if (action.type === "postsList/SET_POSTS") {
    return {
      ...state,
      posts: action.payload,
    };
  }

  return state;
};

export default postsListReducer;
