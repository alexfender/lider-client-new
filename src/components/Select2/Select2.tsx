import { FC } from "react";

import ReactSelect, {
  components,
  IndicatorsContainerProps,
  IndicatorSeparatorProps,
} from "react-select";

import styles from "./select.module.scss";

type TOption = {
  label: string;
  value: string;
};

interface ISelect {
  options: TOption[];
  className: string;
  defaultValue: TOption;
}

const IndicatorsContainer = (
  props: IndicatorsContainerProps<TOption, true>
) => {
  return (
    <div>
      <components.IndicatorsContainer {...props} />
    </div>
  );
};

const IndicatorSeparator = ({
  innerProps,
}: IndicatorSeparatorProps<TOption, true>) => {
  return <></>;
};

export const Select2: FC<ISelect> = ({ ...props }) => {
  return (
    <ReactSelect
      {...props}
      className={styles.select}
      isSearchable={false}
      components={{ IndicatorsContainer, IndicatorSeparator }}
    />
  );
};
