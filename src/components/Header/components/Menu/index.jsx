import "./styles.css";

function Menu() {
  return (
    <ul className="menu">
      <li className="menu__item">
        <a className="menu__link" href="#">
          Home
        </a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="#">
          About us
        </a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="#">
          Gallery
        </a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="#">
          Contacts
        </a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="#">
          Catalog
        </a>
      </li>
    </ul>
  );
}

export default Menu;
