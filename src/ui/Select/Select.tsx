import { forwardRef, memo, useId, useMemo } from "react";
import ReactSelect from "react-select";
import clsx from "clsx";
import type { GroupBase } from "react-select";
import type { SelectComponents } from "react-select/dist/declarations/src/components";
import type { SelectOptionType } from "@/types";
import type { SelectProps, SelectType } from "./types";
import { CUSTOM_SELECT_STYLES } from "./constants";
import { noopReturnNull } from "@/utils/common";
import Typography from "@/ui/Typography";
import Option from "./components/Option";
import SingleValue from "./components/SingleValue";
import NoOptionsMessage from "./components/NoOptionMessage";
import DropdownIndicator from "./components/DropdownIndicator";
import s from "./Select.module.css";

const Select = forwardRef<SelectType, SelectProps>(
  (
    {
      className,
      value,
      options,
      label,
      placeholder,
      disabled,
      components,
      onChange,
      ...rest
    },
    ref
  ) => {
    const id = useId();

    const memoizedComponents = useMemo<
      Partial<
        SelectComponents<SelectOptionType, false, GroupBase<SelectOptionType>>
      >
    >(() => {
      return {
        Option,
        NoOptionsMessage,
        MultiValueLabel: noopReturnNull,
        IndicatorSeparator: noopReturnNull,
        DropdownIndicator,
        SingleValue,
        ...components,
      };
    }, [components]);

    return (
      <div className={clsx(className, disabled && s["disabled-wrap"])}>
        {label ? (
          <label htmlFor={id} className={s.label}>
            <Typography variant="xs" component="span">
              {label}
            </Typography>
          </label>
        ) : null}
        <ReactSelect
          ref={ref}
          id={id}
          className={clsx(s["select"], "focus-primary")}
          classNamePrefix="select"
          styles={CUSTOM_SELECT_STYLES}
          value={value}
          options={options}
          placeholder={placeholder}
          isDisabled={disabled}
          components={memoizedComponents}
          isSearchable={false}
          filterOption={null}
          isClearable={false}
          hideSelectedOptions={false}
          closeMenuOnScroll={false}
          onChange={onChange}
          {...rest}
        />
      </div>
    );
  }
);

Select.displayName = "Select";

export default memo(Select);
