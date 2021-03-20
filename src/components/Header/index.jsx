import Menu from "./components/Menu";
import menuItems from "system/menu.json";

import "./styles.css";

function Header() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <header className="header">
      <div className="header__wrap">
        <Menu items={menuItems} />
      </div>
    </header>
  );
}

export default Header;
