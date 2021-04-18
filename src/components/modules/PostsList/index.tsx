import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostInterface } from "./interfaces";
import { setPostsAction } from "./redux/actionTypes";
import { getPostsSelector } from "./redux/selectors";

import Post from "./components/Post";
import fetchApi from "lib/fetchApi";
import styles from "./styles.module.css";

function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector(getPostsSelector);

  useEffect(() => {
    fetchApi("/posts").then((data) => dispatch(setPostsAction(data.posts)));
  }, [dispatch]);

  return (
    <div className={styles.posts}>
      {posts.map((post: PostInterface) => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  );
}

export default PostsList;
