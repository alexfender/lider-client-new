import { FC, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./transition.module.scss";

interface ITransition {
  children: ReactNode;
  shown: boolean;
  transition?: string;
}

export const Transition: FC<ITransition> = ({
  children,
  shown,
  transition = "fade",
}) => {
  return (
    <CSSTransition
      in={shown}
      timeout={100}
      unmountOnExit
      classNames={{ ...styles }}
    >
      {children}
    </CSSTransition>
  );
};
