import { FC, ReactNode } from "react";
import classNames from "classnames";

import { Transition } from "components/Transition";

import styles from "./bottomNavbar.module.scss";

interface IBotttomNavbar {
  children: ReactNode;
  title: string;
  shown: boolean;
  setShown: (shown: boolean) => void;
}

export const BottomNavbar: FC<IBotttomNavbar> = ({
  children,
  title,
  shown,
  setShown,
}) => {
  return (
    <>
      <Transition shown={shown}>
        <div className={styles.wrapper}>
          <div className={styles.title}>{title}</div>
          <div>{children}</div>
        </div>
      </Transition>
      <Transition shown={shown}>
        <div className={styles.overlay} onClick={() => setShown(false)} />
      </Transition>
    </>
  );
};
