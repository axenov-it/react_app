import "./styles.css";

function Menu(props) {
  const htmlItems = props.items.map((item) => (
    <li key={item.id} className="menu__item">
      <a className="menu__link" href={item.link}>
        {item.title}
      </a>
    </li>
  ));

  return <ul className="menu">{htmlItems}</ul>;
}

export default Menu;
