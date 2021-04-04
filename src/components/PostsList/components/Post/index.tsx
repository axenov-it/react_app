import styles from "./styles.module.css";
import { PostInterface } from "../../interfaces";

interface PropsInterface {
  data: PostInterface;
}

const Post = ({
  data: { title, short_description, date_update },
}: PropsInterface) => {
  const date = new Date(date_update.date);

  return (
    <section className={styles.post}>
      <span className={styles.post__date}>{date.toLocaleDateString()}</span>
      <h3 className={styles.post__title}>{title}</h3>
      <p className={styles.post__description}>{short_description}</p>
    </section>
  );
};

export default Post;
