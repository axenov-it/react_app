import styles from "./styles.module.css";
import { PostInterface } from "../../interfaces";

interface PropsInterface {
  data: PostInterface;
}

const Post = ({ data: { title, short_desctiption } }: PropsInterface) => (
  <section className={styles.post}>
    <h3 className={styles.post__title}>{title}</h3>
    <p className={styles.post__description}>{short_desctiption}</p>
  </section>
);

export default Post;
