import { PostInterface } from "../interfaces";

export const getPostsSelector = (store: {
  postsList: { posts: ReadonlyArray<PostInterface> };
}): ReadonlyArray<PostInterface> => store.postsList.posts;
