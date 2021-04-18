import { useSelector } from "react-redux";
import { getImagesSelector } from "./redux/selectors";

import Slider from "../../modules/Slider";
import PostsList from "../../modules/PostsList";
import styles from "./styles.module.css";

function Home() {
  const images = useSelector(getImagesSelector);

  return (
    <div className="home">
      <Slider images={images} />
      <h2 className={styles.home__titlePosts}>Posts</h2>
      <PostsList />
    </div>
  );
}

export default Home;
