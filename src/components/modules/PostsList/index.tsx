import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostInterface } from "./interfaces";
import { setPostsAction, addPostAction } from "./redux/actionTypes";
import { getPostsSelector } from "./redux/selectors";

import Post from "./components/Post";
import AddPostForm from "./components/AddPostForm";
import fetchApi from "lib/fetchApi";
import styles from "./styles.module.css";

import { FieldsPostFormInterface, ErrorsPostFormInterface } from "./interfaces";

function PostsList() {
  const [isRenderForm, setIsRenderForm] = useState(false);

  const dispatch = useDispatch();
  const posts = useSelector(getPostsSelector);

  useEffect(() => {
    fetchApi("/posts").then((data) => dispatch(setPostsAction(data.posts)));
  }, [dispatch]);

  const onShowAddPostFormClick = () => {
    setIsRenderForm(!isRenderForm);
  };

  const isPostFieldsValid = (
    errors: ErrorsPostFormInterface,
    fields: FieldsPostFormInterface
  ) => {
    const IS_ERROR = errors.title && errors.short_description;
    const IS_NOT_EMPTY = !!fields.title && !!fields.short_description;

    return !IS_ERROR && IS_NOT_EMPTY;
  };

  const createPost = (
    fields: FieldsPostFormInterface,
    errors: ErrorsPostFormInterface
  ) => {
    if (!isPostFieldsValid(errors, fields)) return false;

    const data = {
      ...fields,
      full_description: "",
      status: 1,
      seo_url: "",
    };

    fetchApi("/posts", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((response) => {
      alert(response.message);
      dispatch(addPostAction(response.post));
      setIsRenderForm(false);
    });
  };

  const deletePost = ({ postId }: { postId: number }) => {
    fetchApi(`/posts/${postId}`, { method: "DELETE" }).then((data) =>
      fetchApi("/posts").then((data) => dispatch(setPostsAction(data.posts)))
    );
  };

  return (
    <div className={styles.posts}>
      {isRenderForm && (
        <AddPostForm onClose={onShowAddPostFormClick} createPost={createPost} />
      )}

      <button onClick={onShowAddPostFormClick} className={styles.posts__add}>
        Создать пост
      </button>

      <div className={styles.posts__list}>
        {posts.map((post: PostInterface) => (
          <Post key={post.id} data={post} deletePost={deletePost} />
        ))}
      </div>
    </div>
  );
}

export default PostsList;
