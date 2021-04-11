import styles from "./styles.module.css";

interface PropsInterface {
  images: ReadonlyArray<string>;
  currentImage: string;
}

function Nav(props: PropsInterface) {
  const { images, currentImage } = props;
  return (
    <ul className={styles.nav}>
      {images.map((image) => {
        const className =
          image === currentImage
            ? `${styles.nav__item} ${styles.nav__active}`
            : styles.nav__item;

        return <li key={image} className={className} />;
      })}
    </ul>
  );
}

export default Nav;
