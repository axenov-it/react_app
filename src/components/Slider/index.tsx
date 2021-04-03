import Nav from "./components/Nav";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import styles from "./styles.module.css";
import { useState } from "react";

interface PropsInterface {
  images: ReadonlyArray<string>;
}

function Slider(props: PropsInterface) {
  const { images } = props;

  const [index, setIndex] = useState(0);

  const currentImage = images[index];

  const onClickRight = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const onClickLeft = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className={styles.slider}>
      <FaChevronLeft onClick={onClickLeft} className={styles.slider__btnLeft} />

      <img className={styles.slider__img} src={currentImage} alt="slide" />

      <FaChevronRight
        onClick={onClickRight}
        className={styles.slider__btnRight}
      />

      <Nav images={images} currentImage={currentImage} />
    </div>
  );
}

export default Slider;
