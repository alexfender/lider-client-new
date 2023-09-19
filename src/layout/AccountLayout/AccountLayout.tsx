import { FC, ReactNode, useState, useEffect } from "react";
import classNames from "classnames";

import { Header } from "layout/Header";
import { BreadCrumbs } from "layout/BreadCrumbs";
import { Sidebar } from "layout/Sidebar";
import { Footer } from "layout/Footer";
import { useBreakpoint } from "utils/useBreakpoint";
import { GoBack } from "layout/GoBack";

import styles from "./account.module.scss";

interface IAccount {
  children: ReactNode;
}

export const AccountLayout: FC<IAccount> = ({ children }) => {
  const { breakpoint, isDesktop } = useBreakpoint();
  const [shownMenu, setShownMenu] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (shownMenu === true) {
      body.classList.add("noScroll");
    } else {
      body.classList.remove("noScroll");
    }
  }, [shownMenu]);

  return (
    <div>
      <Header setShownMenu={setShownMenu} shownMenu={shownMenu} />
      <Sidebar shownMenu={shownMenu} setShownMenu={setShownMenu} />
      <div className={classNames(styles.wrapper, styles[breakpoint])}>
        {isDesktop ? <BreadCrumbs /> : <GoBack />}
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};
