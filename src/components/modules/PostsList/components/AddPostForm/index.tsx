import { GrClose } from "react-icons/gr";

import styles from "./styles.module.css";
import { PostInterface } from "../../interfaces";
import { useState } from "react";

interface PropsInterface {
  onClose: () => void;
}

const AddPostForm = ({ onClose }: PropsInterface) => {
  const [fields, setFields] = useState({ title: "", short_description: "" });

  const [errors, setErrors] = useState({
    title: false,
    short_description: false,
  });

  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log(event.target.title.value);
  };

  const onChangeField = (event: any) => {
    const key = event.target.name;
    const value = event.target.value;

    if (key === "title" && !/^[a-zA-Zа-яА-Я\s]{1,15}$/.test(value)) {
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
    <div className={styles.form__wrap}>
      <form onSubmit={onSubmit} className={styles.form}>
        <GrClose className={styles.form__close} onClick={onClose} />

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

        <button className={styles.form__btn}>Создать</button>
      </form>
    </div>
  );
};

export default AddPostForm;
