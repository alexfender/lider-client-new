import { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames";

import { useBreakpoint } from "utils/useBreakpoint";

import styles from "./select.module.scss";

export type TOption = {
  label: string;
  value: string;
};

interface ISelect {
  options: TOption[];
  className?: string;
  defaultValue?: TOption;
}

export const Select: FC<ISelect> = ({ options, defaultValue }) => {
  const { breakpoint } = useBreakpoint();
  const dropdownEl = useRef(null);
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent): void => {
      if (
        !dropdownEl?.current ||
        !(dropdownEl?.current as Node).contains(target as Node)
      ) {
        setOpened(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const onSelect = (option: TOption) => {
    setSelected(option);
    setOpened(false);
  };

  return (
    <div
      className={classNames(styles.select, styles[breakpoint])}
      ref={dropdownEl}
    >
      <div
        className={styles.selected}
        onClick={() => setOpened((prev) => !prev)}
      >
        {selected?.label}
      </div>
      {opened && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.dropdownItem}
              onClick={() => onSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
