import { FC, useState } from "react";
import { useBreakpoint } from "utils/useBreakpoint";
import classNames from "classnames";

import { Button } from "components/Button";
import { Select, TOption } from "components/Select";
import { BottomNavbar } from "components/BottomNavbar";

import styles from "./searchField.module.scss";
import { ReactComponent as SearchWhiteIcon } from "./searchWhite.svg";

const OPTIONS = [
  { label: "С начала артикула", value: "start" },
  { label: "Точно по артикулу", value: "full" },
  { label: "По названию", value: "name" },
  { label: "По VIN", value: "vin" },
];

export const SearchField: FC = () => {
  const { breakpoint, isMobile, isDesktop } = useBreakpoint();
  const [shown, setShown] = useState(false);
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState(OPTIONS[0]);

  const onSelect = (option: TOption) => {
    setSearchType(option);
    setShown(false);
  };

  return (
    <div className={classNames(styles.wrapper, styles[breakpoint])}>
      <input
        className={styles.searchField}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        maxLength={128}
      />
      <div className={styles.rightBlock}>
        {isDesktop ? (
          <Select
            className={styles.select}
            options={OPTIONS}
            defaultValue={OPTIONS[0]}
          />
        ) : (
          <button
            className={styles.selectMobile}
            onClick={() => setShown(true)}
          >
            {searchType.label}
          </button>
        )}

        <Button>{isMobile ? <SearchWhiteIcon /> : "Поиск"}</Button>
      </div>
      <BottomNavbar title="Настройки поиска" shown={shown} setShown={setShown}>
        <>
          {OPTIONS.map((option) => (
            <div
              key={option.value}
              className={classNames(styles.dropdownItem, {
                [styles.active]: option.value === searchType.value,
              })}
              onClick={() => onSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </>
      </BottomNavbar>
    </div>
  );
};
