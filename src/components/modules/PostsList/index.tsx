import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostInterface } from "./interfaces";
import { setPostsAction } from "./redux/actionTypes";
import { getPostsSelector } from "./redux/selectors";

import Post from "./components/Post";
import AddPostForm from "./components/AddPostForm";
import fetchApi from "lib/fetchApi";
import styles from "./styles.module.css";

function PostsList() {
  const [isRenderForm, setIsRenderForm] = useState(false);

  const onCreateClick = () => {
    setIsRenderForm(!isRenderForm);
  };

  const dispatch = useDispatch();
  const posts = useSelector(getPostsSelector);

  useEffect(() => {
    fetchApi("/posts").then((data) => dispatch(setPostsAction(data.posts)));
  }, [dispatch]);

  return (
    <div className={styles.posts}>
      {isRenderForm && <AddPostForm onClose={onCreateClick} />}

      <button onClick={onCreateClick} className={styles.posts__add}>
        Создать пост
      </button>

      <div className={styles.posts__list}>
        {posts.map((post: PostInterface) => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    </div>
  );
}

export default PostsList;
