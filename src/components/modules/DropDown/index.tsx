import { useState } from "react";
import { RiEditBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

interface PropsInterface {
  items: ReadonlyArray<{
    id: number;
    type: "btn" | "link";
    to?: string;
    text: string;
    data?: any;
  }>;
  onClick?: (data: any) => void;
}

function DropDown({ items, onClick }: PropsInterface) {
  const [active, setActive] = useState(false);

  const onMenuClick = () => {
    setActive(!active);
  };

  return (
    <div className={styles.menu}>
      <RiEditBoxLine onClick={onMenuClick} className={styles.menu__show} />
      {active ? (
        <ul className={styles.menu__list}>
          {items.map(({ id, text, type, to = "", data }) =>
            type === "btn" ? (
              <li className={styles.menu__item} key={id}>
                <span
                  className={styles.menu__btn}
                  onClick={() => onClick && onClick(data)}
                >
                  {text}
                </span>
              </li>
            ) : (
              <li className={styles.menu__item} key={id}>
                <Link className={styles.menu__link} to={to}>
                  {text}
                </Link>
              </li>
            )
          )}
        </ul>
      ) : null}
    </div>
  );
}

export default DropDown;
