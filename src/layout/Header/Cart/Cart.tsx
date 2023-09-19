import { FC } from "react";
import classNames from "classnames";

import { useBreakpoint } from "utils/useBreakpoint";

import styles from "./cart.module.scss";

import { ReactComponent as IconCart } from "./cart.svg";

export const Cart: FC = () => {
  const { breakpoint } = useBreakpoint();
  return (
    <div className={classNames(styles.wrapper, styles[breakpoint])}>
      <div className={styles.icon}>
        <IconCart />
      </div>
      <div>
        <div className={styles.summ}>29 323 р.</div>
        <div className={styles.count}>товаров: 2</div>
      </div>
    </div>
  );
};
