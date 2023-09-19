import { FC } from "react";
import classNames from "classnames";

import { useBreakpoint } from "utils/useBreakpoint";

import styles from "./search.module.scss";

export const SearchPage: FC = () => {
  const { breakpoint, isDesktop } = useBreakpoint();
  return (
    <>
      <div className={classNames(styles.head, styles[breakpoint])}>
        <div className={styles.title}>
          <span className={styles.partNumber}>3434365000 SAF</span> Ступица
          колеса прицепа в сборе (Ступица колеса в сборе с болтами (двухрядный
          подш. с упл.кольцом + стопор) SAF Modul X)
        </div>
        <div className={styles.info}>
          <div>Результаты по магазину: Москва, ул. Нижние поля, 31</div>
          {isDesktop && (
            <div>
              Информация об <a href="/">оплате</a> и <a href="/">доставке</a>
            </div>
          )}
        </div>
      </div>
      <div className={classNames(styles.body, styles[breakpoint])}>Контент</div>
    </>
  );
};
