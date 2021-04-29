import { useParams } from "react-router";
import EditPostForm from "components/modules/EditPostForm";
import "./styles.css";

function PostEdit() {
  const { postId }: { postId: string } = useParams();

  return (
    <div>
      <EditPostForm postId={postId} />
    </div>
  );
}

export default PostEdit;
