import Slider from "../../Slider";
import PostsList from "../../PostsList";
import "./styles.css";

function Home() {
  console.log("RENDER HOME PAGE");

  return (
    <div className="home">
      <Slider images={["slide-1.jpg", "slide-2.jpg", "slide-3.jpg"]} />
      <PostsList />
    </div>
  );
}

export default Home;
