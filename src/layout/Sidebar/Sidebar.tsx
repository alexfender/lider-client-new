import { FC } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import { Transition } from "components/Transition";
import { useBreakpoint } from "utils/useBreakpoint";
import { IRoute, menuItems } from "routes";

import { ReactComponent as MenuOrdersIcon } from "./menuOrders.svg";
import styles from "./sidebar.module.scss";

interface ISidebar {
  shownMenu: boolean;
  setShownMenu: (shownMenu: boolean) => void;
}

export const Sidebar: FC<ISidebar> = ({ shownMenu, setShownMenu }) => {
  const { breakpoint, isMobile } = useBreakpoint();

  return (
    <>
      <div
        className={classNames(styles.wrapper, styles[breakpoint], {
          [styles.shown]: shownMenu,
        })}
      >
        {!isMobile && (
          <button
            className={styles.close}
            onClick={() => setShownMenu(false)}
          />
        )}
        <div className={styles.overflow}>
          <nav className={styles.nav}>
            <div className={styles.profile}>
              <div>
                <div className={styles.icon}>В</div>
              </div>
              <div>
                <div className={styles.userName}>Виталий</div>
                <div className={styles.settings}>Настройки профиля</div>
              </div>
            </div>
            <ul className={styles.nav}>
              {menuItems.map((item: IRoute) => (
                <li className={styles.navItem} key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                    onClick={() => setShownMenu(false)}
                  >
                    <MenuOrdersIcon />
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      {!isMobile && (
        <Transition shown={shownMenu}>
          <div className={styles.overlay} onClick={() => setShownMenu(false)} />
        </Transition>
      )}
    </>
  );
};
