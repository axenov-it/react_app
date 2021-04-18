import styles from "./styles.module.css";
import { PostInterface } from "../../interfaces";
import DropDown from "components/modules/DropDown";

interface PropsInterface {
  data: PostInterface;
}

const Post = ({
  data: { id, title, short_description, date_update },
}: PropsInterface) => {
  const date = new Date(date_update.date);

  return (
    <section className={styles.post}>
      <DropDown
        items={[
          {
            id: 1,
            type: "link",
            text: "Редактировать",
            to: `/posts/edit/${id}`,
          },
          {
            id: 2,
            type: "btn",
            text: "Удалить",
          },
        ]}
      />
      <span className={styles.post__date}>{date.toLocaleDateString()}</span>
      <h3 className={styles.post__title}>{title}</h3>
      <p className={styles.post__description}>{short_description}</p>
    </section>
  );
};

export default Post;
