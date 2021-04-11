import { Link } from "react-router-dom";

import "./styles.css";

interface PropsInterface {
  items: ReadonlyArray<{
    id: number;
    link: string;
    title: string;
  }>;
}

function Menu(props: PropsInterface) {
  const htmlItems = props.items.map((item) => (
    <li key={item.id} className="menu__item">
      <Link className="menu__link" to={item.link}>
        {item.title}
      </Link>
    </li>
  ));

  return <ul className="menu">{htmlItems}</ul>;
}

export default Menu;
