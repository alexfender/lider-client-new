import { FC } from "react";

import styles from "./breadCrumbs.module.scss";

export const BreadCrumbs: FC = () => {
  return (
    <nav className={styles.breadcrumbs}>
      <ul>
        <li>
          <a className={styles.link} href="/">
            Главная
          </a>
        </li>
        <li>
          <span>Поиск детали по коду</span>
        </li>
      </ul>
    </nav>
  );
};
