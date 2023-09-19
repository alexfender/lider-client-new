import { FC, ReactNode } from "react";
import classNames from "classnames";

import { useBreakpoint } from "utils/useBreakpoint";

import styles from "./button.module.scss";

interface Ibutton {
  children: ReactNode;
}

export const Button: FC<Ibutton> = ({ children }) => {
  const { breakpoint } = useBreakpoint();
  return (
    <button className={classNames(styles.button, styles[breakpoint])}>
      {children}
    </button>
  );
};
