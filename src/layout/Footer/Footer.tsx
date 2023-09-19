import { FC } from "react";
import classNames from "classnames";

import { useBreakpoint } from "utils/useBreakpoint";

import styles from "./footer.module.scss";

const MENU_ITEMS = [
  { title: "О компании", url: "/" },
  { title: "Оплата", url: "/" },
  { title: "Доставка", url: "/" },
];

export const Footer: FC = () => {
  const { breakpoint } = useBreakpoint();
  return (
    <div className={classNames(styles.wrapper, styles[breakpoint])}>
      <nav className={styles.nav}>
        <ul>
          {MENU_ITEMS.map((item) => (
            <li className={styles.navItem} key={item.title}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className={styles.manager}>
          <div>Ваш менеджер: </div>
          <a href="/">Алексей Казанцев</a>
        </div>
      </nav>
      <div className={styles.phoneBlock}>
        <a href="/">+7(999) 916-50-00</a>
      </div>
    </div>
  );
};
