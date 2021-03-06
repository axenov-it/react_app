import Menu from "./components/Menu";
import menuItems from "system/menu";

import "./styles.css";

function Header() {
  return (
    <header className="header">
      <div className="header__wrap">
        <Menu items={menuItems} />
      </div>
    </header>
  );
}

export default Header;
