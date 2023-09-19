import { FC } from "react";
import classNames from "classnames";

import { useBreakpoint } from "utils/useBreakpoint";

import { SearchField } from "./SearchField";
import { Cart } from "./Cart";
import styles from "./header.module.scss";
import logo from "./logo.svg";

interface IHeader {
  setShownMenu: (shownMenu: boolean | ((prev: boolean) => boolean)) => void;
  shownMenu: boolean;
}

export const Header: FC<IHeader> = ({ setShownMenu, shownMenu }) => {
  const { breakpoint, isMobile, isTablet, isDesktop } = useBreakpoint();

  return (
    <div className={classNames(styles.wrapper, styles[breakpoint])}>
      {isDesktop && (
        <>
          <div className={styles.logo}>
            <img src={logo} alt="ЛИДЕР ТРАК" />
          </div>
          <button
            className={styles.menuButton}
            onClick={() => setShownMenu((prev: boolean) => !prev)}
          >
            Меню
          </button>
          <SearchField />
          <div className={styles.info}>
            <div className={styles.info_title}>Название компании</div>
            <div className={styles.info_value}>Тракмоторс</div>
          </div>
          <div className={styles.info}>
            <div className={styles.info_title}>Пользователь</div>
            <div className={styles.info_value}>Петров Д.В.</div>
          </div>
          <div className={styles.info}>
            <div className={styles.info_title}>Баланс</div>
            <div className={styles.info_value}>-28 590 р.</div>
          </div>
          <div className={styles.info}>
            <div className={styles.info_title}>Завтра к оплате</div>
            <div className={styles.info_value}>58 938 р.</div>
          </div>
          <div className={styles.info}>
            <div className={styles.info_title}>Бонус</div>
            <div className={styles.info_value}>2 142 р.</div>
          </div>
          <Cart />
          <div className={styles.wishlist} />
          <div className={styles.exit}>
            <button>Выход</button>
          </div>
        </>
      )}

      {(isMobile || isTablet) && (
        <div>
          <div className={styles.top}>
            <div className={styles.leftBlock}>
              <button
                className={styles.menuButtonMobile}
                onClick={() => setShownMenu((prev: boolean) => !prev)}
              >
                <div
                  className={classNames(styles.hamburger, {
                    [styles.shown]: shownMenu,
                  })}
                >
                  <span />
                  <span />
                  <span />
                </div>
              </button>
              <div className={styles.logo}>
                <img src={logo} alt="ЛИДЕР ТРАК" />
              </div>
            </div>
            <div className={styles.rightBlock}>
              <div className={styles.wishlist} />
              <div className={styles.user} />
              <Cart />
            </div>
          </div>
          <SearchField />
        </div>
      )}
    </div>
  );
};
