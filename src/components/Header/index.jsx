import Menu from "./components/Menu";
import "./styles.css";

function Header() {
  return (
    <header className="header">
      <div className="header__wrap">
        <Menu />
      </div>
    </header>
  );
}

export default Header;
