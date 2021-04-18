import { useParams } from "react-router";
import "./styles.css";

function PostEdit() {
  const { postId }: { postId: string } = useParams();

  return (
    <div className="contacts">
      <h2>PostEdit {postId}</h2>
    </div>
  );
}

export default PostEdit;
