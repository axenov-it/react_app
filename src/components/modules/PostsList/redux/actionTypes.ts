import { PostInterface } from "../interfaces";

export const setPostsAction = (posts: ReadonlyArray<PostInterface>) => ({
  type: "postsList/SET_POSTS",
  payload: posts,
});

export const addPostAction = (post: PostInterface) => ({
  type: "postsList/SET_POST",
  payload: post,
});
