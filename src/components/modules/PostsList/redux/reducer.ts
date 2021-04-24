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
  switch (action.type) {
    case "postsList/SET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };

    case "postsList/SET_POST":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

    default:
      return state;
  }
};

export default postsListReducer;
