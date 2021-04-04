import { useEffect, useState } from "react";
import fetchApi from "lib/fetchApi";
import styles from "./styles.module.css";
import { PostInterface } from "./interfaces";
import Post from "./components/Post";

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchApi("/posts").then((data) => setPosts(data.posts));
  }, []);

  return (
    <div className={styles.posts}>
      <h2>Posts</h2>
      {posts.map((post: PostInterface) => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  );
}

export default PostsList;
