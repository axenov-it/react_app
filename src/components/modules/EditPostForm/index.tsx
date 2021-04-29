import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import fetchApi from "lib/fetchApi";

interface PropsInterface {
  postId: string;
}

const EditPostForm = ({ postId }: PropsInterface) => {
  const [fields, setFields] = useState({
    title: "",
    short_description: "",
  });

  const [errors, setErrors] = useState({
    title: false,
    short_description: false,
  });

  useEffect(() => {
    fetchApi(`/posts/${postId}`).then(({ post }) => {
      setFields(post);
    });
  }, [postId]);

  const onSubmit = (event: any) => {
    event.preventDefault();

    fetchApi(`/posts/${postId}`, {
      method: "PUT",
      body: JSON.stringify(fields),
    }).then((response) => {
      alert(response.message);
    });
  };

  const onChangeField = (event: any) => {
    const key = event.target.name;
    const value = event.target.value;

    if (key === "title" && !/^[a-zA-Zа-яА-Я0-9\s]{0,15}$/.test(value)) {
      setErrors({ ...errors, [key]: true });
      return;
    } else {
      setErrors({ ...errors, [key]: false });
    }

    if (key === "short_description" && /({|>|<)/.test(value)) {
      setErrors({ ...errors, [key]: true });
      return;
    } else {
      setErrors({ ...errors, [key]: false });
    }

    setFields({ ...fields, [key]: value });
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h2>POST ID: {`${postId}`}</h2>
      <input
        value={fields.title}
        onChange={onChangeField}
        className={styles.form__item}
        name="title"
        placeholder="Введите название"
      />
      {errors.title && (
        <span className={styles.form__error}>
          Текст должен содержать только буквы верхнего и нижнего регистра
        </span>
      )}

      <textarea
        className={styles.form__item}
        onChange={onChangeField}
        value={fields.short_description}
        name="short_description"
        placeholder="введите описание"
      />
      {errors.short_description && (
        <span className={styles.form__error}>
          Текст не должен содержать спец символы {"<>{}"}
        </span>
      )}

      <button className={styles.form__btn}>Сохранить</button>
    </form>
  );
};

export default EditPostForm;
