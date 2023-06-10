import { memo } from "react";
import { components } from "react-select";
import type { OptionProps } from "./types";
import Typography from "@/ui/Typography";
import s from "./Option.module.css";
import { RiCheckLine } from "react-icons/ri";
import { ICON_M_SIZE } from "@/constants";

const Option: React.FC<OptionProps> = (props) => {
  return (
    <components.Option {...props}>
      <Typography className={s["option-text"]} variant="base" component="span">
        {props.children}
      </Typography>
      {props?.isSelected ? (
        <RiCheckLine size={ICON_M_SIZE} className={s["option-icon"]} />
      ) : null}
    </components.Option>
  );
};

export default memo(Option);
