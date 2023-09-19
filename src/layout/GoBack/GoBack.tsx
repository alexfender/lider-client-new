import { FC } from "react";

import styles from "./goBack.module.scss";

export const GoBack: FC = () => {
  return (
    <nav className={styles.goBack}>
      <a href="/">
        <div className={styles.icon} />
        Назад
      </a>
    </nav>
  );
};
