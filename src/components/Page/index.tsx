import { useEffect, useState } from "react";
import "./styles.css";

export const getPosts = async (limit = 9, page = 1): Promise<any> => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}?api_key=${process.env.REACT_APP_API_KEY}&limit=${limit}&page=${page}`
  );
  const result: any = await response.json();

  return result.posts;
};

function Page() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  console.log("PAGE RENDER");

  const htmlPosts = posts.map((post: any) => <p key={post.id}>{post.title}</p>);

  return (
    <main className="page">
      <h2>Posts</h2>
      {htmlPosts}
    </main>
  );
}

export default Page;
